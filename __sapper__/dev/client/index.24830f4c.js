import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, q as query_selector_all, c as claim_element, b as children, m as claim_text, f as detach_dev, h as attr_dev, j as add_location, l as append_dev, n as noop } from './client.e99e2597.js';

/* src/routes/newsLetter/index.svelte generated by Svelte v3.35.0 */

const file = "src/routes/newsLetter/index.svelte";

function create_fragment(ctx) {
	let script;
	let t;

	const block = {
		c: function create() {
			script = element("script");
			t = text("!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,\"script\",\"https://chimpstatic.com/mcjs-connected/js/users/2d9d55f1ccc764f7d5a16dc0f/919742bb485513f808873c0f3.js\");");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-ldw7mh\"]", document.head);
			script = claim_element(head_nodes, "SCRIPT", { id: true });
			var script_nodes = children(script);
			t = claim_text(script_nodes, "!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,\"script\",\"https://chimpstatic.com/mcjs-connected/js/users/2d9d55f1ccc764f7d5a16dc0f/919742bb485513f808873c0f3.js\");");
			script_nodes.forEach(detach_dev);
			head_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(script, "id", "mcjs");
			add_location(script, file, 1, 2, 16);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, script);
			append_dev(script, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			detach_dev(script);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("NewsLetter", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<NewsLetter> was created with unknown prop '${key}'`);
	});

	return [];
}

class NewsLetter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NewsLetter",
			options,
			id: create_fragment.name
		});
	}
}

export default NewsLetter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjQ4MzBmNGMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==