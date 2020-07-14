export interface Course {
    id: string,
    name: string,
    description: string,
    duration: string,
    instructor: string,
    instructor_id: string,
    rating: string
}

export let COURSES: Course[] = [
    {
        id: '1',
        name: 'Python',
        description: 'Basics of Python',
        duration: '34hr',
        instructor: 'XYZ',
        instructor_id: 'i-12',
        rating: '5'
    },
    {
        id: '2',
        name: 'C++',
        description: 'Basics of C++',
        duration: '15hr',
        instructor: 'ABC',
        instructor_id: 'i-13',
        rating: '4.5'
    },
    {
        id: '3',
        name: 'Go',
        description: 'Basics of Python',
        duration: '34hr',
        instructor: 'XYZ',
        instructor_id: 'i-12',
        rating: '5'
    },
    {
        id: '4',
        name: 'Centura',
        description: 'Basics of C++',
        duration: '15hr',
        instructor: 'ABC',
        instructor_id: 'i-13',
        rating: '4.5'
    }
]