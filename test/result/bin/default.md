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
error Command failed with exit code 1.
/**/

/* code */
1
/**/