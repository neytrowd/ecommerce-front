import { useMemo } from 'react';
import { Images } from '@/Assets/Images';

export function useCategoryOptions() {
    return useMemo(() => {
        return [
            {
                id: 1,
                categoryName: 'Category 1',
                image: Images.Category1,
            },
            {
                id: 2,
                categoryName: 'Category 2',
                image: Images.Category2,
            },
            {
                id: 3,
                categoryName: 'Category 3',
                image: Images.Category3,
            },
            {
                id: 4,
                categoryName: 'Category 4',
                image: Images.Category4,
            },
            {
                id: 1,
                categoryName: 'Category 1',
                image: Images.Category1,
            },
            {
                id: 2,
                categoryName: 'Category 2',
                image: Images.Category2,
            },
            {
                id: 3,
                categoryName: 'Category 3',
                image: Images.Category3,
            },
            {
                id: 4,
                categoryName: 'Category 4',
                image: Images.Category4,
            },
            {
                id: 1,
                categoryName: 'Category 1',
                image: Images.Category1,
            },
            {
                id: 2,
                categoryName: 'Category 2',
                image: Images.Category2,
            },
            {
                id: 3,
                categoryName: 'Category 3',
                image: Images.Category3,
            },
            {
                id: 4,
                categoryName: 'Category 4',
                image: Images.Category4,
            },
        ];
    }, []);
}
