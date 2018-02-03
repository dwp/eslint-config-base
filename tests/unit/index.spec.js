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
            expect(Object.keys(eslintConfig)).toEqual([ 'parserOptions', 'root', 'extends', 'env', 'rules' ]);
        });

        describe('the parserOptions key should ', () => {
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
                expect(Object.keys(rules)).toEqual([ 'ecmaVersion', 'sourceType' ]);
            });

            describe('the ecmaVersion key should ', () => {
                const rule = rules.ecmaVersion;

                it('be ES2015', () => {
                    expect(rule).toEqual(6);
                });
            });

            describe('the sourceType key should ', () => {
                const rule = rules.sourceType;

                it('be module', () => {
                    expect(rule).toEqual('module');
                });
            });
        });

        describe('the root key should ', () => {
            const rule = eslintConfig.root;

            it('be true', () => {
                expect(rule).toEqual(true);
            });
        });

        describe('the extends key should ', () => {
            const rule = eslintConfig.extends;

            it('inherit recommended settings', () => {
                expect(rule).toEqual([ 'eslint:recommended', 'airbnb-base' ]);
            });
        });

        describe('the env key should ', () => {
            const rule = eslintConfig.env;

            it('be an object', () => {
                expect(rule).toEqual(jasmine.any(Object));
            });

            it('have an es6 key', () => {
                expect(Object.keys(rule)).toContain('es6');
            });

            it('not have any other keys', () => {
                expect(Object.keys(rule)).toEqual([ 'es6' ]);
            });

            describe('the es6 key should ', () => {
                it('be enabled', () => {
                    expect(rule.es6).toEqual(true);
                });
            });
        });

        describe('the rules key should ', () => {
            const { rules } = eslintConfig;

            it('be an object', () => {
                expect(rules).toEqual(jasmine.any(Object));
            });

            it('have an array-bracket-spacing key', () => {
                expect(Object.keys(rules)).toContain('array-bracket-spacing');
            });

            it('have a comma-dangle key', () => {
                expect(Object.keys(rules)).toContain('comma-dangle');
            });

            it('have an indent key', () => {
                expect(Object.keys(rules)).toContain('indent');
            });

            it('have a no-inline-comments key', () => {
                expect(Object.keys(rules)).toContain('no-inline-comments');
            });

            it('should have a require-jsdoc key', () => {
                expect(Object.keys(rules)).toContain('require-jsdoc');
            });

            it('have a valid-jsdoc key', () => {
                expect(Object.keys(rules)).toContain('valid-jsdoc');
            });

            it('should not have any other keys', () => {
                expect(Object.keys(rules)).toEqual([ 'array-bracket-spacing', 'comma-dangle', 'indent', 'no-inline-comments', 'require-jsdoc', 'valid-jsdoc' ]);
            });

            describe('the array-bracket-spacing key should ', () => {
                const rule = rules['array-bracket-spacing'];

                it('raise an error', () => {
                    expect(rule[0]).toEqual('error');
                });

                it('when not applied', () => {
                    expect(rule[1]).toEqual('always');
                });

                it('and not do anything else', () => {
                    expect(rule).toEqual([ 'error', 'always' ]);
                });
            });

            describe('the comma-dangle key should ', () => {
                const rule = rules['comma-dangle'];

                it('raise an error if not applied', () => {
                    expect(rule).toEqual([ 'error', 'never' ]);
                });
            });

            describe('the indent key should ', () => {
                const rule = rules.indent;

                it('raise an error', () => {
                    expect(rule[0]).toEqual('error');
                });

                it('when identation is not 4 spaces', () => {
                    expect(rule[1]).toEqual(4);
                });

                it('and not do anything else', () => {
                    expect(rule).toEqual([ 'error', 4 ]);
                });
            });

            describe('the no-inline-comments key should ', () => {
                const rule = rules['no-inline-comments'];

                it('raise an error if not applied', () => {
                    expect(rule).toEqual('error');
                });
            });

            describe('the require-jsdoc key should ', () => {
                const rule = rules['require-jsdoc'];

                it('be enabled', () => {
                    expect(rule[0]).toEqual('error');
                });

                describe('and raise an error', () => {
                    it('if function declarations are not documented', () => {
                        expect(rule[1].require).toEqual(jasmine.objectContaining({
                            FunctionDeclaration: true
                        }));
                    });

                    it('if class declarations are not documented', () => {
                        expect(rule[1].require).toEqual(jasmine.objectContaining({
                            ClassDeclaration: true
                        }));
                    });

                    it('if method definitions are not documented', () => {
                        expect(rule[1].require).toEqual(jasmine.objectContaining({
                            MethodDefinition: true
                        }));
                    });

                    it('if arrow function expressions are not documented', () => {
                        expect(rule[1].require).toEqual(jasmine.objectContaining({
                            ArrowFunctionExpression: true
                        }));
                    });

                    it('and for no other reasons', () => {
                        expect(rule[1].require).toEqual({
                            ArrowFunctionExpression: true,
                            ClassDeclaration: true,
                            FunctionDeclaration: true,
                            MethodDefinition: true
                        });
                    });
                });

                it('and not do anything else', () => {
                    expect(rule).toEqual([ 'error', {
                        require: {
                            ArrowFunctionExpression: true,
                            ClassDeclaration: true,
                            FunctionDeclaration: true,
                            MethodDefinition: true
                        }
                    } ]);
                });
            });

            describe('the valid-jsdoc key should ', () => {
                const rule = rules['valid-jsdoc'];

                it('raise an error if not applied', () => {
                    expect(rule).toEqual('error');
                });
            });
        });
    });
});
