// Full (hopefully) regex for both textual and html entities spaces:
export const space = '(?:\\s|&#x20;|&#32;|&thinsp;|&#x2009;|&#8201;|&#x200a;|&#8202;|&#x205f;|&#8287;|&#x1680;|&#5760;|&#x2000;|&#8192;|&#x2001;|&#8193;|&ensp;|&#x2002;|&#8194;|&emsp;|&#x2003;|&#8195;|&#x2004;|&#8196;|&#x2005;|&#8197;|&#x2006;|&#8198;|&nbsp;|&#xa0;|&#160;|&#x202f;|&#8239;|&#x2007;|&#8199;|&#x2008;|&#8200;|&#x3000;|&#12288;|&#xfeff;|&#65279;|&Tab;|&#x9;|&#9;|&#xb;|&#11;)';

// HE'S COMING - https://stackoverflow.com/a/1732454 - regex adapted from https://haacked.com/archive/2004/10/25/usingregularexpressionstomatchhtml.aspx/
export const tag = '</?\\w+(?:(?:\\s+\\w+(?:-\\w+)*(?:\\s*=\\s*(?:".*?"|\'.*?\'|[^\'">\\s]+))?)+\\s*|\\s*)/?>';

export const opening_tag = tag_name => (`<${tag_name}(?:(?:\\s+\\w+(?:-\\w+)*(?:\\s*=\\s*(?:".*?"|'.*?'|[^'">\\s]+))?)+\\s*|\\s*)/?>`);

// This is far from being perfect but it does prevent transforming things within tag attributes values. Unfortunately it also prevents transforming things like the colon in: `<p>Hello color: red" attr ></p>` because the right part up to the closing </p> looks like what would be within a html tag - But it's better not to transform those than to transform what could be part of an html tag and mess up inline styles, scripts, or whatever.
export const not_in_tag_attribute_value = what => (`(?!<\\w+(?:(?:\\s+\\w+(?:-\\w+)*(?:\\s*=\\s*(?:".*?"|'.*?'|[^'">\\s]+))?)+\\s*|\\s*))${what}(?!.*?["'](?:(?:\\s+\\w+(?:-\\w+)*(?:\\s*=\\s*(?:".*?"|'.*?'|[^'">\\s]+))?)+\\s*|\\s*)/?>)`);

export const laquo = '(?:«|&laquo;|&#[xX]0{0,}[aA][bB];|&#0{0,}171;)';
export const raquo = '(?:»|&raquo;|&#[xX]0{0,}[bB][bB];|&#0{0,}187;)';
export const lsaquo = '(?:‹|&lsaquo;|&#[xX]0{0,}2039;|&#0{0,}8249;)';
export const rsaquo = '(?:›|&rsaquo;|&#[xX]0{0,}203[aA];|&#0{0,}8250;)';
export const ldquo = '(?:“|&ldquo;|&#[xX]0{0,}201[cC];|&#{0,}8220;)';
export const rdquo = '(?:”|&rdquo;|&#[xX]0{0,}201[dD];|&#{0,}8221;)';
export const lsquo = '(?:‘|&lsquo;|&#[xX]0{0,}2018;|&#0{0,}8216;)';
export const rsquo = '(?:’|&rsquo;|&#[xX]0{0,}2019;|&#0{0,}8217;)';
