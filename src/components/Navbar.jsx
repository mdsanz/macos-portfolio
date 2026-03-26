import dayjs from "dayjs";
import { useEffect, useState } from "react";

import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
    const openWindow = useWindowStore((state) => state.openWindow);
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(dayjs());
        }, 15000); // 15 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />
                <p className="font-bold">Marcos' Desktop</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id}>
                            <button type="button" onClick={() => openWindow(type)}>
                                <span>{name}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon-hover" alt={`icon-${id}`} />
                        </li>
                    ))}
                </ul>

                <time>{time.format("ddd MMM D h:mm A")}</time>
            </div>
        </nav>
    );
};

export default Navbar;
