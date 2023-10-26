import { useCallback, useState } from 'react';

export function useTriggeredValue<T>(initialValue: T, on: T, off: T) {
  const [value, setValue] = useState(initialValue);

  const onFunc = useCallback(() => {
    setValue(on);
  }, [setValue]);

  const offFunc = useCallback(() => {
    setValue(off);
  }, [setValue]);

  return {
    value,
    on: onFunc,
    off: offFunc,
    switch: value === on ? offFunc : onFunc,
  };
}
