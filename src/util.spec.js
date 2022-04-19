import UtilService from './util.mjs'

describe("test for util", () => {
  it("lala", () => {
        const input = ['la=lu'];
        const realArgs = UtilService.parse(input)
        expect(realArgs.la).toBe('lu');
  });
});
