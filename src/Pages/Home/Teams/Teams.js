import React from 'react';

import Team from '../Team/Team';


const teams = [
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Ali Haydar',
        expertize: 'Gazipur Branch'
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Saidul Islam',
        expertize: 'Chitagong Branch'
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Tanjina Akter',
        expertize: 'Rajshahi Branch'
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Khorshed Alam',
        expertize: 'Dhaka Branch'
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Hamidur Rahman',
        expertize: 'Orthopaedics Specialist'
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Arfat khan',
        expertize: 'Feni Branch'
    },
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: 'Eshita Islam',
        expertize: 'Cumilla Branch'
    },
]

const Teams = () => {
    return (
        <div id="doctors" className="container">
            <h2 className="text-primary mt-5 bg-dark">Our Fenian Tourism Team Members</h2>
            <div className="row">
                {
                    teams.map(doctor => <Team
                        key={doctor.name}
                        doctor={doctor}
                    >

                    </Team>)
                }
            </div>
        </div>
    );
};

export default Teams;