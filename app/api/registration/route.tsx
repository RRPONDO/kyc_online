import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const schema = z.object({
  companyName: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
  counterParty: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: { email: body.email },
  });

  if (user)
    return NextResponse.json({ error: "User already exists" }, { status: 400 });

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: body.companyName,
      companyName: body.companyName,
      email: body.email,
      hashedPassword: hashedPassword,
      counterParty: body.counterParty,
    },
  });

  //if (!newUser) console.log("something went wrong");

  return NextResponse.json(newUser);
}
