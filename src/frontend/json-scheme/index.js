// Node.js require:
const Ajv = require("ajv")

const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}

const schema = {
  // $schema: "https://json-schema.org/draft/2020-12/schema",
  type: "object",
  properties: {
    foo: {type: "integer", "$comment": "Created by John Doe"},
    bar: {type: "string"},
    date1: {type: "string", pattern: "\\d*-\\d*-\\d*"}
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: "abc",
  date: "2019-12-12"
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
console.log('hahahahah')