import { useLocation } from 'react-router';
import { PagesRouting } from '@/Routing';

export function useRouting() {
  const location = useLocation();

  return {
    currentPage: location.pathname as keyof typeof PagesRouting,
  };
}
