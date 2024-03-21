import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

const schema = z.object({
  structure: z.string(),
  regName: z.string(),
  regDate: z.string(),
  regId: z.string(),
  regAddress: z.string(),
  bsnsAddress: z.string(),
  telephone: z.string(),
  website: z.string(),
  bankName: z.string(),
  bankAddress: z.string(),
  country: z.string(),
  accNumber: z.string(),
  swift: z.string(),
  iban: z.string(),
  beneficiaryAcc: z.string(),
  regCountry: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  //console.log(body);

  //const session = await getServerSession(authOptions);
  //const userId = await prisma.user.findUnique({ where: { id: body.id } });

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  //const quest = await prisma.questionnaire.findUnique({
  // where: { id: body.id },
  //});

  //if (user)
  //return NextResponse.json({ error: "User already exists" }, { status: 400 });

  //const hashedPassword = await bcrypt.hash(body.password, 10);

  const createQuest = await prisma.questionnaire.create({
    data: {
      structure: body.structure,
      regName: body.regName,
      regDate: body.regDate,
      regId: body.regId,
      regCountry: body.regCountry,
      regAddress: body.regAddress,
      bsnsAddress: body.bsnsAddress,
      telephone: body.telephone,
      website: body.website,
      bankName: body.bankName,
      bankAddress: body.bankAddress,
      country: body.country,
      accNumber: body.accNumber,
      swift: body.swift,
      iban: body.iban,
      beneficiaryAcc: body.beneficiaryAcc,
    },
  });

  //if (!newUser) console.log("something went wrong");

  return NextResponse.json(createQuest);
}
