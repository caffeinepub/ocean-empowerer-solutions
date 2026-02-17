import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    service: ServiceType;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface UserProfile {
    name: string;
}
export enum ServiceType {
    tiles = "tiles",
    roofing = "roofing",
    custom = "custom",
    painting = "painting",
    repairs = "repairs",
    cabinets = "cabinets",
    drywall = "drywall",
    windows = "windows",
    flooring = "flooring"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getInquiryCount(): Promise<bigint>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitInquiry(name: string, email: string, phone: string, service: ServiceType, message: string): Promise<void>;
}
