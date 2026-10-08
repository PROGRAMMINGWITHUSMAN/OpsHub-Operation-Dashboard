const highlightText = (text, query) => {
  if (!query.trim()) {
    return {
      before: text,
      match: "",
      after: "",
    };
  }

  const start = text.toLowerCase().indexOf(query.toLowerCase());

  if (start === -1) {
    return {
      before: text,
      match: "",
      after: "",
    };
  }

  const end = start + query.length;

  return {
    before: text.slice(0, start),
    match: text.slice(start, end),
    after: text.slice(end),
  };
};

export default highlightText;