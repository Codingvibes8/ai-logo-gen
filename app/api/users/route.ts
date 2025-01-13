import {db} from '@/configs/FirebaseConfig'

import {doc} from 'firebase/firestore';
import {getDoc, setDoc, serverTimestamp} from 'firebase/firestore'; 
import { NextRequest, NextResponse } from 'next/server';

export async function Post(req){
    const {userEmail,userName}  = await req.json()
try {
    //does user exist
    const docRef=doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return NextRequest.json(docSnap.data());,
          } else {
            //insert new user;
const data={name: userName, email: userEmail, credits:5,};

            await setDoc(doc(db, "users", userEmail), {
                name: userName,
                email: userEmail,
                credits: 5,
    });
   NextResponse.json(data);
    }

   
} catch (error) {
    return new Response(JSON.stringify(error), {
        status: 500,
      });

}}