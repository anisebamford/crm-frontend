import {useDebouncedCallback} from "use-debounce";
import {DebouncedState, Options} from "use-debounce/dist/useDebouncedCallback";

const debounceInterval = 500

export function useDebounce<T extends (...args: any[]) => ReturnType<T>>(func: T, wait = debounceInterval, options?: Options): DebouncedState<T> {
    return useDebouncedCallback(func, wait, options)
};
