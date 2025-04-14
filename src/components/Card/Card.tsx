import { CloudUpload } from 'lucide-react';

type CardProps ={
    title: string 
    text: string 
}

export function Card({title, text}: CardProps) {
    return (
        <section 
            className='flex flex-col items-center px-5  py-3 pb-6 bg-gray-200 rounded-lg max-w-lg
            hover:shadow-lg hover:-translate-y-1 transition-all'>
            <div className='flex justify-center items-center bg-blue-500 p-3 rounded-lg -mt-10 shadow-lg'>
                <CloudUpload data-testid='card-icon' className='text-gray-100 w-8 h-8 '/>              
            </div>
            <h2 className='text-gray-700 mt-6 text-lg font-medium'>{title}</h2>
            <p className='text-gray-500 mt-2.5 px-2'>{text}</p>
        </section>
    )
}