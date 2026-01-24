import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    // initial position (Dhaka)
    const position = [23.8103, 90.4125];
    const serviceCenters = useLoaderData();
    const mafRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c =>
            c.district.toLowerCase().includes(location.toLowerCase())
        );

        if (district) {
            const coor = [district.latitude, district.longitude];
            console.log(coor, district);
            mafRef.current.setView(coor, 10);
        }
    };

    return (
        <div className='p-10 my-10 rounded-2xl bg-base-200' >
            <h2 className="text-3xl font-bold text-secondary my-10">
                We are available in 64 districts
            </h2>

            {/* search center */}
            <form
                onSubmit={handleSearch}
                className="mb-5 w-full max-w-lg"
            >
                <div className="flex items-center gap-2 bg-base-100 border border-base-300 rounded-full px-4 py-2 shadow-sm">

                    {/* Search Icon */}
                    <svg
                        className="h-5 w-5 opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

                    {/* Input */}
                    <input
                        type="search"
                        name="location"
                        className="grow bg-transparent outline-none text-sm placeholder-gray-400"
                        placeholder="Search here"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="btn btn-sm rounded-full bg-primary text-black border-none px-6"
                    >
                        Search
                    </button>
                </div>
            </form>
            <h3 className="text-xl font-bold text-secondary my-10">
                We deliver almost all over Bangladesh
            </h3>


            {/* map */}
            <div className="w-full h-[500px]">
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={false}
                    ref={mafRef}
                    className="w-full h-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {serviceCenters.map((center, index) => (
                        <Marker
                            key={index}
                            position={[center.latitude, center.longitude]}
                        >
                            <Popup>
                                <div className="text-sm text-black">
                                    <p>{center.district}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;