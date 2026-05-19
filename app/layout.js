export const metadata = {
  title: 'NS Engineering',
  description: 'Μηχανολόγος Μηχανικός - ΠΕΑ - ΥΔΕ - Πυρασφάλεια'
}

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body style={{margin:0,fontFamily:'Arial, sans-serif',background:'#0b1120'}}>
        {children}
      </body>
    </html>
  )
}