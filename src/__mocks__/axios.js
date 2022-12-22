/* eslint-disable import/no-anonymous-default-export */

// export default {
//   get: jest.fn().mockResolvedValue({ data: {} }),
// };

const mockGetResponse = [
  {
    name: "Luke Skywalker",
    gender: "male",
  },
  {
    name: "C-3PO",
    gender: "n/a",
  },
];

const mockResponse = {
  get: jest.fn().mockResolvedValue({ data: mockGetResponse }),
};

export default mockResponse;
