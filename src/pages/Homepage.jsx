import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AsideBar from '../components/AsideBar';
import NavBar from '../components/NavBar';
import Popular from './Popular';

export default function Navbar() {
    return (
        <div className="homepage">
            <NavBar />

            <main className="page__content">
                <AsideBar />

                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Popular />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    )
}