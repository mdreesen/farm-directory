"use server"
import { connectDB } from "@/lib/mongodb";
import Contact from "@/(models)/Contact";

export async function createContact(values: any) {
    try {
        await connectDB();

        await Contact.create(values);


    } catch (error) {
        console.log(error)
        return error
    }
};