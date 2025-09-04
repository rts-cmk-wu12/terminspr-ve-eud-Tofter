import { NextResponse } from "next/server"

export default async function middleware(request) {
const cookie = request.cookies.get('dimsedut')

if (!cookie) {
    return NextResponse.redirect(new URL('/', request.url))
}
}

export const config = {
    matcher: ["/dashboard/:path*"]
}