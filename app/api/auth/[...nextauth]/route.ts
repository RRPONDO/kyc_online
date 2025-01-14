import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
   providers:[
    CredentialsProvider({
        name: 'Credentials',
        credentials:{
            email:{label: 'Email', type: 'email', placeholder: 'Email'},
            password:{label: 'Password', type: 'password', placeholder: 'Password'},
        },
        async authorize(credentials, req){
            if (!credentials?.email || !credentials?.password) return null;

            //check for the user in our database
            const user = await prisma.user.findUnique({where: {email: credentials.email},});
            if (!user) return null;

            const passwordsMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);
            return passwordsMatch ? user : null;
        },
    })

   ],
   session: {
    strategy: 'jwt'
   }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }