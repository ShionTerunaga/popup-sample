import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { PopupProvider } from "@/provider/popup-provider"

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900"
})
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900"
})

export const metadata: Metadata = {
    title: "popup-sample",
    description: ""
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <PopupProvider>{children}</PopupProvider>
            </body>
        </html>
    )
}
