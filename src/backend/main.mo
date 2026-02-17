import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type ServiceType = {
    #flooring;
    #drywall;
    #windows;
    #painting;
    #tiles;
    #cabinets;
    #roofing;
    #repairs;
    #custom;
  };

  public type Inquiry = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    service : ServiceType;
    message : Text;
  };

  public type UserProfile = {
    name : Text;
    // Other user metadata if needed
  };

  let inquiries = Map.empty<Nat, Inquiry>();
  var nextId = 0;
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management (persisted on blockchain)
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public inquiry submission - accessible to everyone including guests
  public shared ({ caller }) func submitInquiry(name : Text, email : Text, phone : Text, service : ServiceType, message : Text) : async () {
    if (name == "" or email == "" or phone == "" or message == "") {
      Runtime.trap("All fields are required!");
    };

    let newInquiry : Inquiry = {
      id = nextId;
      name;
      email;
      phone;
      service;
      message;
    };
    inquiries.add(nextId, newInquiry);
    nextId += 1;
  };

  // Admin-only: View all customer inquiries (contains sensitive data)
  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    inquiries.values().toArray();
  };

  // Admin-only: View inquiry count (internal metrics)
  public query ({ caller }) func getInquiryCount() : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view inquiry count");
    };
    inquiries.size();
  };
};
