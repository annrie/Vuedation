type InputItem = {
  id: string;
  label: string;
  value: string;
};

type InputState = {
  sampleName: string;
  sampleEmail: string;
  samplePassword: string;
  sampleTextarea: string;
  sampleRadio: string;
  sampleSelect: string;
  sampleCheck: string[];
};

type ValidateError = {
  $message: string;
};

type ResultState = {
  results: null | InputState;
  errors: ValidateError[];
};
