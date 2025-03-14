import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { getAuth } from "@clerk/nextjs/server";

import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = getAuth(req)

    if (!userId) {
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), { status: 401 })
    }

    await connectToDB()

    let user = await User.findOne({ clerkId: userId })

    // Khi người dùng đăng nhập lần đầu tạo người dùng mới
    if (!user) {
      user = await User.create({ clerkId: userId })
      await user.save()
    }

    return NextResponse.json(user, { status: 200 })
  } catch (err) {
    console.log("[users_GET]", err)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}