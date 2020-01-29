## passes
pass

/* stdout */

> @artdeco/npm-s@0.0.0-pre pass /Users/zavr/adc/npm-s
> node test/fixture/pass

this file is fine
/**/

## passes x 2
pass pass

/* stdout */

> @artdeco/npm-s@0.0.0-pre pass /Users/zavr/adc/npm-s
> node test/fixture/pass

this file is fine

> @artdeco/npm-s@0.0.0-pre pass /Users/zavr/adc/npm-s
> node test/fixture/pass

this file is fine
/**/

## fails
fail

/* stdout */

> @artdeco/npm-s@0.0.0-pre fail /Users/zavr/adc/npm-s
> node test/fixture/fail

hello worCommand "fail" existed with code 1
/**/

/* stderr */
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @artdeco/npm-s@0.0.0-pre fail: `node test/fixture/fail`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the @artdeco/npm-s@0.0.0-pre fail script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/zavr/.npm/_logs/debug.log
/**/

/* code */
1
/**/