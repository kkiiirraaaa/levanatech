import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const provider = searchParams.get("provider");

  if (provider === "github") {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo`;
    return NextResponse.redirect(githubAuthUrl);
  }

  return NextResponse.json({ error: "Unknown provider" }, { status: 400 });
}