import { useQueryClient } from '@tanstack/react-query'


const useFetch = () => {
    const queryClient = useQueryClient();

    return async () => {
        await queryClient.resetQueries({ type: 'active' });
        await queryClient.refetchQueries({
            type: 'active',
            stale: true, // Only refetch if stale
        });
    }
}

export default useFetch;