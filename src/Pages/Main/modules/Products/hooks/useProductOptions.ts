import { useMemo } from 'react';
import { Images } from '@/Assets/Images';

export function useProductOptions() {
    return useMemo(() => {
        return [
            {
                id: 1,
                image: Images.Product1,
            },
            {
                id: 2,
                image: Images.Product2,
            },
            {
                id: 3,
                image: Images.Product3,
            },
            {
                id: 4,
                image: Images.Product4,
            },
            {
                id: 5,
                image: Images.Product5,
            },
            {
                id: 6,
                image: Images.Product6,
            },
            {
                id: 7,
                image: Images.Product7,
            },
            {
                id: 8,
                image: Images.Product8,
            },
        ];
    }, []);
}
