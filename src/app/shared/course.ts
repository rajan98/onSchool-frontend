export interface Course {
    id: string,
    name: string,
    description: string,
    imageUrl: string,
    courseUrl: string,
    rating: string
}

export let COURSES: Course[] = [
    {
        id: '1',
        name: 'Web Development',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum in inventore minus molestias deleniti.',
        imageUrl: '../../assets/img/card-img-1.jpg',
        courseUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        rating: '4.5/5'
    },
    {
        id: '2',
        name: 'Mobile Development',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum in inventore minus molestias deleniti.',
        imageUrl: '../../assets/img/card-img-2.jpg',
        courseUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        rating: '4.7/5'
    },
    {
        id: '3',
        name: 'Mathematics',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum in inventore minus molestias deleniti.',
        imageUrl: '../../assets/img/card-img-3.jpg',
        courseUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        rating: '3.5/5'
    },
    {
        id: '4',
        name: 'Machine learning',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum in inventore minus molestias deleniti.',
        imageUrl: '../../assets/img/card-img-2.jpg',
        courseUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        rating: '4.2/5'
    },
    {
        id: '5',
        name: 'Angular',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum in inventore minus molestias deleniti.',
        imageUrl: '../../assets/img/card-img-3.jpg',
        courseUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        rating: '4.7/5'
    },
    {
        id: '6',
        name: 'React',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit dolorum in inventore minus molestias deleniti.',
        imageUrl: '../../assets/img/card-img-1.jpg',
        courseUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
        rating: '3.2/5'
    }
]