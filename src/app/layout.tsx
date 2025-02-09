import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const [role, setRole] = useState({
//   type: Role.NONE,
//   value: undefined,
// });

// function onRoleChange(e: { type: Role; value: any }) {
//   setRole(e);
// }

// const defaultContext: AppContextType = {
//   role,
//   setRole: onRoleChange
// }

// export type AppContextType = {
//   role: {
//     type: Role;
//     value: any;
//   };
//   setRole: (e: {type: Role, value: any}) => void
// };

// export const AppContext = createContext(defaultContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
