const eslintConfig = require('../../src/index');

describe('@dwp/eslint-config-base', () => {
  it('the entrypoint should export an object', () => {
    expect(eslintConfig).toEqual(jasmine.any(Object));
  });

  describe('the exported object', () => {
    it('should have a parserOptions key', () => {
      expect(Object.keys(eslintConfig)).toContain('parserOptions');
    });

    it('should have a root key', () => {
      expect(Object.keys(eslintConfig)).toContain('parserOptions');
    });

    it('should have an extends key', () => {
      expect(Object.keys(eslintConfig)).toContain('extends');
    });

    it('should have an env key', () => {
      expect(Object.keys(eslintConfig)).toContain('env');
    });

    it('should have a rules key', () => {
      expect(Object.keys(eslintConfig)).toContain('rules');
    });

    it('not have any other keys', () => {
      expect(Object.keys(eslintConfig)).toEqual(['parserOptions', 'root', 'extends', 'env', 'rules']);
    });

    describe('the parserOptions key should', () => {
      const rules = eslintConfig.parserOptions;

      it('be an object', () => {
        expect(rules).toEqual(jasmine.any(Object));
      });

      it('have an ecmaVersion key', () => {
        expect(Object.keys(rules)).toContain('ecmaVersion');
      });

      it('have a sourceType key', () => {
        expect(Object.keys(rules)).toContain('sourceType');
      });

      it('not have any other keys', () => {
        expect(Object.keys(rules)).toEqual(['ecmaVersion', 'sourceType']);
      });

      describe('the ecmaVersion key should', () => {
        const rule = rules.ecmaVersion;

        it('be ES2015', () => {
          expect(rule).toEqual(6);
        });
      });

      describe('the sourceType key should', () => {
        const rule = rules.sourceType;

        it('be module', () => {
          expect(rule).toEqual('module');
        });
      });
    });

    describe('the root key should', () => {
      const rule = eslintConfig.root;

      it('be true', () => {
        expect(rule).toEqual(true);
      });
    });

    describe('the extends key should', () => {
      const rule = eslintConfig.extends;

      it('inherit recommended settings', () => {
        expect(rule).toEqual(['eslint:recommended', 'airbnb-base']);
      });
    });

    describe('the env key should', () => {
      const rule = eslintConfig.env;

      it('be an object', () => {
        expect(rule).toEqual(jasmine.any(Object));
      });

      it('have an es6 key', () => {
        expect(Object.keys(rule)).toContain('es6');
      });

      it('not have any other keys', () => {
        expect(Object.keys(rule)).toEqual(['es6']);
      });

      describe('the es6 key should', () => {
        it('be enabled', () => {
          expect(rule.es6).toEqual(true);
        });
      });
    });

    describe('the rules key should', () => {
      const { rules } = eslintConfig;

      it('be an object', () => {
        expect(rules).toEqual(jasmine.any(Object));
      });

      it('have an indent key', () => {
        expect(Object.keys(rules)).toContain('indent');
      });

      it('have a valid-jsdoc key', () => {
        expect(Object.keys(rules)).toContain('valid-jsdoc');
      });

      it('should not have any other keys', () => {
        expect(Object.keys(rules)).toEqual(['brace-style', 'curly', 'indent', 'semi', 'valid-jsdoc']);
      });

      describe('the brace-style key should', () => {
        const rule = rules['brace-style'];

        it('raise an error', () => {
          expect(rule[0]).toEqual('error');
        });

        it("when the 1tbs isn't applied", () => {
          expect(rule[1]).toEqual('1tbs');
        });

        it('and not allow single lines', () => {
          expect(rule[2]).toEqual({ allowSingleLine: false });
        });

        it('and not do anything else', () => {
          expect(rule).toEqual(['error', '1tbs', { allowSingleLine: false }]);
        });
      });

      describe('the curly key should', () => {
        const rule = rules.curly;

        it('raise an error', () => {
          expect(rule[0]).toEqual('error');
        });

        it('in all circumstances', () => {
          expect(rule[1]).toEqual('all');
        });

        it('and not do anything else', () => {
          expect(rule).toEqual(['error', 'all']);
        });
      });

      describe('the semi key should', () => {
        const rule = rules.semi;

        it('raise an error', () => {
          expect(rule[0]).toEqual('error');
        });

        it("when semi colons aren't used", () => {
          expect(rule[1]).toEqual('always');
        });

        it('and when semi colons are omitted from a one line block', () => {
          expect(rule[2]).toEqual({ omitLastInOneLineBlock: false });
        });

        it('and not do anything else', () => {
          expect(rule).toEqual(['error', 'always', { omitLastInOneLineBlock: false }]);
        });
      });

      describe('the indent key should', () => {
        const rule = rules.indent;

        it('raise an error', () => {
          expect(rule[0]).toEqual('error');
        });

        it('when identation is not 4 spaces', () => {
          expect(rule[1]).toEqual(2);
        });

        it('and not do anything else', () => {
          expect(rule).toEqual(['error', 2]);
        });
      });

      describe('the valid-jsdoc key should', () => {
        const rule = rules['valid-jsdoc'];

        it('raise an error if not applied', () => {
          expect(rule).toEqual('error');
        });

        it('and not do anything else', () => {
          expect(rule).toEqual('error');
        });
      });
    });
  });
});
