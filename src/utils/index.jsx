const formatDateInIndonesian = (date) => {
  const options = {
    year: "numeric",
    month: "short",
  };

  const dateInIndonesian = new Date(date).toLocaleDateString("id-ID", options);

  return dateInIndonesian;
};

export { formatDateInIndonesian };
