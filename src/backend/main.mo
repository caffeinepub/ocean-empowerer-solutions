import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  public type Message = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
  };

  let messages = Map.empty<Nat, Message>();
  var nextId = 0;

  public shared ({ caller }) func submitMessage(name : Text, email : Text, subject : Text, message : Text) : async () {
    if (name == "" or email == "" or subject == "" or message == "") {
      Runtime.trap("All fields are required!");
    };

    let newMessage : Message = {
      id = nextId;
      name;
      email;
      subject;
      message;
    };
    messages.add(nextId, newMessage);
    nextId += 1;
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray();
  };

  public query ({ caller }) func getMessageCount() : async Nat {
    messages.size();
  };
};
