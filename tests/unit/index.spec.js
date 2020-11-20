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

    it('should have a plugins key', () => {
      expect(eslintConfigKeys).to.contain('plugins');
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
      expect(eslintConfigKeys).to.deep.equal(['parserOptions', 'plugins', 'root', 'extends', 'env', 'rules']);
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
        expect(rule).to.deep.equal(['eslint:recommended', 'plugin:jsdoc/recommended', 'airbnb-base']);
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

      describe('jsdoc-specific rules should', () => {
        it('check tag names are valid', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/check-tag-names');
        });

        it('require a description', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-description');
        });

        it('require descriptions are complete sentences', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-description-complete-sentence');
        });

        it('require parameters to be documented', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-param');
        });

        it('require parameters to have a description', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-param-description');
        });

        it('require parameters to have a name', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-param-name');
        });

        it('require parameters to have a type', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-param-type');
        });

        it('require returns to be documented', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-returns');
        });

        it('require returns tags to have a corresponding return statement', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-returns-check');
        });

        it('require returns to have a description', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-returns-description');
        });

        it('require returns to have a type', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-returns-type');
        });

        it('require throws to be documented', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-throws');
        });

        it('requires jsdocs to be created', () => {
          expect(Object.keys(rules)).to.contain('jsdoc/require-jsdoc');
        });
      });

      it('should not have any other keys', () => {
        expect(Object.keys(rules)).to.deep.equal([
          'brace-style', 'curly', 'indent', 'no-plusplus', 'semi',
          'jsdoc/check-tag-names', 'jsdoc/require-description',
          'jsdoc/require-description-complete-sentence',
          'jsdoc/require-param', 'jsdoc/require-param-description',
          'jsdoc/require-param-name', 'jsdoc/require-param-type',
          'jsdoc/require-returns', 'jsdoc/require-returns-check',
          'jsdoc/require-returns-description', 'jsdoc/require-returns-type',
          'jsdoc/require-throws', 'jsdoc/require-jsdoc',
        ]);
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

        it('add set switch indentation level to match base indentation level', () => {
          expect(rule[2]).to.deep.equal({ SwitchCase: 1 });
        });

        it('and not do anything else', () => {
          expect(rule).to.deep.equal(['error', 2, { SwitchCase: 1 }]);
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

      describe('the jsdoc ruleset, containing', () => {
        describe('the check-tag-names key should', () => {
          const rule = rules['jsdoc/check-tag-names'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-description key should', () => {
          const rule = rules['jsdoc/require-description'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-description-complete-sentence key should', () => {
          const rule = rules['jsdoc/require-description-complete-sentence'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-param key should', () => {
          const rule = rules['jsdoc/require-param'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-param-description key should', () => {
          const rule = rules['jsdoc/require-param-description'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-param-name key should', () => {
          const rule = rules['jsdoc/require-param-name'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-param-type key should', () => {
          const rule = rules['jsdoc/require-param-type'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-returns key should', () => {
          const rule = rules['jsdoc/require-returns'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and force returns for asynchronous functions', () => {
            expect(rule[1]).to.deep.equal({ forceReturnsWithAsync: true });
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error', { forceReturnsWithAsync: true }]);
          });
        });

        describe('the require-returns-check key should', () => {
          const rule = rules['jsdoc/require-returns-check'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-returns-description key should', () => {
          const rule = rules['jsdoc/require-returns-description'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-returns-type key should', () => {
          const rule = rules['jsdoc/require-returns-type'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-throws key should', () => {
          const rule = rules['jsdoc/require-throws'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error']);
          });
        });

        describe('the require-jsdoc key should', () => {
          const rule = rules['jsdoc/require-jsdoc'];

          it('raise an error', () => {
            expect(rule[0]).to.equal('error');
          });

          it('and include class properties within its contexts', () => {
            expect(rule[1].contexts).to.contain('ClassProperty');
          });

          it('and require that arrow functions have a jsdoc block', () => {
            expect(Object.keys(rule[1].require)).to.contain('ArrowFunctionExpression');
          });

          it('and require that class declarations have a jsdoc block', () => {
            expect(Object.keys(rule[1].require)).to.contain('ClassDeclaration');
          });

          it('and require that class expressions have a jsdoc block', () => {
            expect(Object.keys(rule[1].require)).to.contain('ClassExpression');
          });

          it('and require that function declarations have a jsdoc block', () => {
            expect(Object.keys(rule[1].require)).to.contain('FunctionDeclaration');
          });

          it('and require that function expressions have a jsdoc block', () => {
            expect(Object.keys(rule[1].require)).to.contain('FunctionExpression');
          });

          it('and require that method definitions have a jsdoc block', () => {
            expect(Object.keys(rule[1].require)).to.contain('MethodDefinition');
          });

          it('and do nothing else', () => {
            expect(rule).to.deep.equal(['error', {
              contexts: ['ClassProperty'],
              require: {
                ArrowFunctionExpression: true,
                ClassDeclaration: true,
                ClassExpression: true,
                FunctionDeclaration: true,
                FunctionExpression: true,
                MethodDefinition: true,
              },
            }]);
          });
        });
      });
    });
  });
});
