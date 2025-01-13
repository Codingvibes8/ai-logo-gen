import { db } from '@/configs/FirebaseConfig'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { NextRequest, NextResponse } from 'next/server';

export async function post(req: NextRequest) {
    const { userEmail, userName } = await req.json();

    try {
        // Does user exist
        const docRef = doc(db, "users", userEmail);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data());
        } else {
            // Insert new user
            const data = { name: userName, email: userEmail, credits: 5, timestamp: serverTimestamp() };

            await setDoc(doc(db, "users", userEmail), data);
            return NextResponse.json(data);
        }
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
        });
    }
}


