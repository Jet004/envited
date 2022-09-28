import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CreateEvent from "./pages/CreateEvent"
import Event from "./pages/Event"
import Home from "./pages/Home"

const appElement = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/create" element={<CreateEvent />} />
                <Route path="/event" element={<Event />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </ Route>
        </Routes>
    </BrowserRouter>
    , appElement
);