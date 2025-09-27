export const passwordCriteria = [
  {
    label: "Lowercase character",
    test: (password: string) => /[a-z]/.test(password),
  },
  {
    label: "Uppercase character",
    test: (password: string) => /[A-Z]/.test(password),
  },
  { label: "Numbers", test: (password: string) => /[0-9]/.test(password) },
  {
    label: "Special character",
    test: (password: string) => /[\W_]/.test(password),
  },
  {
    label: "8 characters minimum",
    test: (password: string) => password.length >= 8
  },
 
];


export const overviewHeader = [
  {
    title: "Film Title",
    value: "title",
  },
  {
    title: "Release Date",
    value: "date",
  },
  {
    title: "Director",
    value: "director",
  },
  {
    title: "Producer",
    value: "producer",
  },
  {
    title: "Episode ID",
    value: "id",
  },
  {
    title: "Character",
    value: "character",
  },
];
export const starshipHeader = [
  {
    title: "Name",
    value: "name",
  },
  {
    title: "Model",
    value: "model",
  },
  {
    title: "Class",
    value: "class",
  },
  {
    title: "Passenger",
    value: "passenger",
  },
  {
    title: "Length",
    value: "length",
  },
  {
    title: "Character",
    value: "character",
  },
];

export const peopleHeader = [
  {
    title: "Name",
    value: "name",
  },
  {
    title: "Birth year",
    value: "birthYear",
  },
  {
    title: "Gender",
    value: "gender",
  },
  {
    title: "Hair Color",
    value: "hairColor",
  },
  {
    title: "Height",
    value: "height",
  },
  {
    title: "Created",
    value: "created",
  },
];
export const speciesHeader = [
  {
    title: "Name",
    value: "name",
  },
  {
    title: "Classification",
    value: "classification",
  },
  {
    title: "Eye colors",
    value: "eyeColor",
  },
  {
    title: "Hair Color",
    value: "hairColor",
  },
  {
    title: "Height",
    value: "height",
  },
  {
    title: "Created",
    value: "created",
  },
];


export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1; 
  const day = date.getDate();
  const year = date.getFullYear().toString().slice(-2); 

  return `${month}/${day}/${year}`;
}

 export function formatFullDate(dateString: string) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
