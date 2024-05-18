import { BookCatalogue } from "./BookCatalogue"
import { MyBooks } from "./MyBooks"
import { NotFound } from "./NotFound"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<BookCatalogue/>}></Route>
                    <Route path="/mybooks" element={<MyBooks/>}></Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}