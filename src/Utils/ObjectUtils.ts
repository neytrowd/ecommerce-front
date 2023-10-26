const DOT_REGEX = /\b\.\b/;

type ValueType = object | string | undefined;

function getNestedObjectField(object: Record<string, ValueType>, name: string): ValueType {
  if (Object.keys(object).length === 0) return;

  const keys = name.split(DOT_REGEX);
  for (const key of keys) {
    // Checking array field name
    if (key.includes('[')) {
      const arrayName = key.split('[')[0];
      const arrayIndex = Number(key.split('[')[1].split(']')[0]);

      object = (object[arrayName] as [])[arrayIndex] as Record<string, ValueType>;
      continue;
    } // if

    object = object && (object[key] as Record<string, ValueType>);
  } // for

  return object;
}

export const ObjectUtils = {
  DOT_REGEX,
  getNestedObjectField,
};
