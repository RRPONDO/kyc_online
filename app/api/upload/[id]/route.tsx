import { writeFile } from "fs/promises";
import { NextApiRequest, NextApiResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { error } from "console";
import formidable from "formidable";

const prisma = new PrismaClient();

interface Props {
  params: { id: string };
}

export async function PUT({ params }: Props, request: NextApiRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user?.name;

  //const data = await request.formData();
  const form = new formidable.IncomingForm();

  form.parse(request, async (err, fields, files) => {
    if (err) {
      console.error("Error parsing form data:", err);
      return NextApiResponse.json({
        success: false,
        error: "Error parsing form data",
      });
    }

    const file = files.file as File[];
  });

  //const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  // Generate timestamp
  const timestamp = Date.now().toString();

  // Modify the filename to include timestamp
  const originalFilename = file.name;
  const filenameParts = originalFilename.split(".");
  const fileExtension = filenameParts.pop();
  const newFilename = `${filenameParts.join(
    "."
  )}-${timestamp}.${fileExtension}`;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const path = `./public/uploads/${newFilename}`;
  await writeFile(path, buffer);

  // Get user ID from session
  //const userId = request.session.get('userId'); // Adjust how you retrieve the ID from the session

  //if (!userId) {
  //  return NextResponse.json({ success: false, error: 'User not authenticated' });
  //}

  // Save file information to the database
  try {
    const dbRecord = await prisma.questionnaire.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!dbRecord)
      return NextResponse.json({ error: "invalid record" }, { status: 404 });

    const fileRecord = await prisma.questionnaire.update({
      where: { id: dbRecord.id },
      data: {
        fileName: newFilename, // Update with the modified filename
        filePath: path,
      },
    });
    console.log("File record created:", fileRecord);
  } catch (error) {
    console.error("Error saving file to database:", error);
    return NextResponse.json({ success: false, error: "Database error" });
  }

  console.log(`open ${path} to see the uploaded file`);
  return NextResponse.json({ success: true });
}
