import { AcademicCapIcon, BookOpenIcon, ChartBarIcon, TrophyIcon } from "@heroicons/react/24/outline"


const Education = () => {
    const educationData = [
        {
            id:1,
            degree: 'SSC',
            Institution: 'BAF Shaheen Haji Ashraf Ali School and College',
            gpa: '4.11',
            Period: '2017-2018',
            icon: AcademicCapIcon
        },
        {
            id:2,
            degree: 'HSC',
            Institution: 'Monipur High School and College',
            gpa: '4.08',
            Period: '2019-2020',
            icon: BookOpenIcon
        },
        {
            id:3,
            degree: 'BSc in Software Engineering',
            Institution: 'Daffodil International University',
            gpa: '2.79',
            Period: '2021-2024',
            icon: ChartBarIcon
        },
    ];

    const certifications = [
        {
            name: 'Full Stack Web Development',
            issuer: 'Programming Hero',
            date: '2024',
            icon: TrophyIcon
            
        }
    ]
  return (
    <div>Education</div>
  )
}

export default Education