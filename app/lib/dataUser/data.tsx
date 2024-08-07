import Farmer from '@/app/(models)/Farmer';
import User from '@/app/(models)/User';
import Contact from '@/app/(models)/Contact';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUsers() {
    noStore()

    try {
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function validUsers() {
    noStore()

    try {
        const users = await User.find();
        const filter = users.filter(item => item.isAdmin === false);
        return filter
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleUser(id: string) {
    noStore()

    try {
        const farmer = await Farmer.findOne({ _id: id });
        return farmer
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleUserByEmail(email: string) {
    noStore()

    try {
        const data = await User.findOne({ email: email });
        return data ?? {}
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchContacts() {
    noStore()

    try {
        const data = await Contact.find()
        return data
    } catch (error) {
        console.log(error)
        return error
    }
};

export async function fetchSingleContact(id: string) {
    noStore()

    try {
        const data = await Contact.findOne({ _id: id });
        return data
    } catch (error) {
        console.log(error)
        return error
    }
};