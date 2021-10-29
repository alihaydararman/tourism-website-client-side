import React from 'react';

import Team from '../Team/Team';


const teams = [
    {
        img: 'https://pbs.twimg.com/profile_images/1390969833383088128/l0zjzIFk_400x400.jpg',
        name: ' Ali Haydar',
        expertize: 'Gazipur Branch'
    },
    {
        img: 'data:image/jpeg;base64,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',
        name: ' Saidul Islam',
        expertize: 'Chitagong Branch'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUsCdASuZH4bjbb-JlYpLMeyRwJg_STHGr8_qYmS3urmPO3wLRKwoCIfN-odDoUML5Z8&usqp=CAU',
        name: ' Tanjina Akter',
        expertize: 'Rajshahi Branch'
    },
    {
        img: 'https://i1.sndcdn.com/avatars-XN22Dy2e13aLWsyM-X0EG1Q-t500x500.jpg',
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
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPaSVyXGM2Zc5ebGnCiPFYXNseYbU6Dsr7Bg&usqp=CAU',
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