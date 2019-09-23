const { expect } = require('chai');

const eslintConfig = require('../../src/index');

describe('@dwp/eslint-config-base', () => {
  it('the entrypoint should export an object', () => {
    expect(eslintConfig).to.be.an('Object');
  });

  describe('the exported object', () => {
    const eslintConfigKeys = Object.keys(eslintConfig);

    it('should have a parserOptions key', () => {
      expect(eslintConfigKeys).to.contain('parserOptions');
    });

    it('should have a root key', () => {
      expect(eslintConfigKeys).to.contain('parserOptions');
    });

    it('should have an extends key', () => {
      expect(eslintConfigKeys).to.contain('extends');
    });

    it('should have an env key', () => {
      expect(eslintConfigKeys).to.contain('env');
    });

    it('should have a rules key', () => {
      expect(eslintConfigKeys).to.contain('rules');
    });

    it('not have any other keys', () => {
      expect(eslintConfigKeys).to.deep.equal(['parserOptions', 'root', 'extends', 'env', 'rules']);
    });

    describe('the parserOptions key should', () => {
      const { parserOptions: rules } = eslintConfig;
      const rulesKeys = Object.keys(rules);

      it('be an object', () => {
        expect(rules).to.be.an('Object');
      });

      it('have an ecmaVersion key', () => {
        expect(rulesKeys).to.contain('ecmaVersion');
      });

      it('have a sourceType key', () => {
        expect(rulesKeys).to.contain('sourceType');
      });

      it('not have any other keys', () => {
        expect(rulesKeys).to.deep.equal(['ecmaVersion', 'sourceType']);
      });

      describe('the ecmaVersion key should', () => {
        const rule = rules.ecmaVersion;

        it('be ES2017', () => {
          expect(rule).to.equal(2018);
        });
      });

      describe('the sourceType key should', () => {
        const rule = rules.sourceType;

        it('be module', () => {
          expect(rule).to.equal('module');
        });
      });
    });

    describe('the root key should', () => {
      const rule = eslintConfig.root;

      it('be true', () => {
        expect(rule).to.equal(true);
      });
    });

    describe('the extends key should', () => {
      const rule = eslintConfig.extends;

      it('inherit recommended settings', () => {
        expect(rule).to.deep.equal(['eslint:recommended', 'airbnb-base']);
      });
    });

    describe('the env key should', () => {
      const rule = eslintConfig.env;

      it('be an object', () => {
        expect(rule).to.be.an('Object');
      });

      it('have an es6 key', () => {
        expect(Object.keys(rule)).to.contain('es6');
      });

      it('not have any other keys', () => {
        expect(Object.keys(rule)).to.deep.equal(['es6']);
      });

      describe('the es6 key should', () => {
        it('be enabled', () => {
          expect(rule.es6).to.equal(true);
        });
      });
    });

    describe('the rules key should', () => {
      const { rules } = eslintConfig;

      it('be an object', () => {
        expect(rules).to.be.an('Object');
      });

      it('have a brace-style key', () => {
        expect(Object.keys(rules)).to.contain('brace-style');
      });

      it('have a curly key', () => {
        expect(Object.keys(rules)).to.contain('curly');
      });

      it('have an indent key', () => {
        expect(Object.keys(rules)).to.contain('indent');
      });

      it('have a no-plusplus key', () => {
        expect(Object.keys(rules)).to.contain('no-plusplus');
      });

      it('have a semi key', () => {
        expect(Object.keys(rules)).to.contain('semi');
      });

      it('have a valid-jsdoc key', () => {
        expect(Object.keys(rules)).to.contain('valid-jsdoc');
      });

      it('should not have any other keys', () => {
        expect(Object.keys(rules)).to.deep.equal(['brace-style', 'curly', 'indent', 'no-plusplus', 'semi', 'valid-jsdoc']);
      });

      describe('the brace-style key should', () => {
        const rule = rules['brace-style'];

        it('raise an error', () => {
          expect(rule[0]).to.equal('error');
        });

        it("when the 1tbs isn't applied", () => {
          expect(rule[1]).to.equal('1tbs');
        });

        it('and not allow single lines', () => {
          expect(rule[2]).to.deep.equal({ allowSingleLine: false });
        });

        it('and not do anything else', () => {
          expect(rule).to.deep.equal(['error', '1tbs', { allowSingleLine: false }]);
        });
      });

      describe('the curly key should', () => {
        const rule = rules.curly;

        it('raise an error', () => {
          expect(rule[0]).to.equal('error');
        });

        it('in all circumstances', () => {
          expect(rule[1]).to.equal('all');
        });

        it('and not do anything else', () => {
          expect(rule).to.deep.equal(['error', 'all']);
        });
      });

      describe('the indent key should', () => {
        const rule = rules.indent;

        it('raise an error', () => {
          expect(rule[0]).to.equal('error');
        });

        it('when identation is not 4 spaces', () => {
          expect(rule[1]).to.equal(2);
        });

        it('and not do anything else', () => {
          expect(rule).to.deep.equal(['error', 2]);
        });
      });

      describe('the no-plusplus key should', () => {
        const rule = rules['no-plusplus'];

        it('be turned off', () => {
          expect(rule).to.equal('off');
        });
      });

      describe('the semi key should', () => {
        const rule = rules.semi;

        it('raise an error', () => {
          expect(rule[0]).to.equal('error');
        });

        it("when semi colons aren't used", () => {
          expect(rule[1]).to.equal('always');
        });

        it('and when semi colons are omitted from a one line block', () => {
          expect(rule[2]).to.deep.equal({ omitLastInOneLineBlock: false });
        });

        it('and not do anything else', () => {
          expect(rule).to.deep.equal(['error', 'always', { omitLastInOneLineBlock: false }]);
        });
      });

      describe('the valid-jsdoc key should', () => {
        const rule = rules['valid-jsdoc'];

        it('raise an error if not applied', () => {
          expect(rule).to.equal('error');
        });

        it('and not do anything else', () => {
          expect(rule).to.equal('error');
        });
      });
    });
  });
});
