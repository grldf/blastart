import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, q as set_data_dev, n as noop } from './client.f2132bad.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/contact/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/contact/index.svelte";

function create_fragment(ctx) {
	let div1;
	let h1;
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let div0;
	let p0;
	let t3;
	let t4;
	let p1;
	let a0;
	let t5_value = /*info*/ ctx[0].telephone + "";
	let t5;
	let a0_href_value;
	let t6;
	let p2;
	let t7;
	let t8;
	let p3;
	let a1;
	let t9_value = /*info*/ ctx[0].emailcontact + "";
	let t9;
	let a1_href_value;

	const block = {
		c: function create() {
			div1 = element("div");
			h1 = element("h1");
			t0 = text("Contactez-Nous!");
			t1 = space();
			img = element("img");
			t2 = space();
			div0 = element("div");
			p0 = element("p");
			t3 = text("Thibault");
			t4 = space();
			p1 = element("p");
			a0 = element("a");
			t5 = text(t5_value);
			t6 = space();
			p2 = element("p");
			t7 = text("Ou par Email");
			t8 = space();
			p3 = element("p");
			a1 = element("a");
			t9 = text(t9_value);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Contactez-Nous!");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			img = claim_element(div1_nodes, "IMG", { src: true, alt: true, class: true });
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Thibault");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			a0 = claim_element(p1_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t5 = claim_text(a0_nodes, t5_value);
			a0_nodes.forEach(detach_dev);
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "Ou par Email");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", {});
			var p3_nodes = children(p3);
			a1 = claim_element(p3_nodes, "A", { href: true, class: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, t9_value);
			a1_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", "svelte-z3i04o");
			add_location(h1, file, 29, 4, 644);
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "une oeuvre d'un membre de Blast");
			attr_dev(img, "class", "svelte-z3i04o");
			add_location(img, file, 30, 4, 673);
			add_location(p0, file, 32, 8, 769);
			attr_dev(a0, "href", a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone);
			attr_dev(a0, "class", "svelte-z3i04o");
			add_location(a0, file, 34, 12, 809);
			add_location(p1, file, 33, 8, 793);
			add_location(p2, file, 36, 8, 885);
			attr_dev(a1, "href", a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos");
			attr_dev(a1, "class", "svelte-z3i04o");
			add_location(a1, file, 38, 12, 929);
			add_location(p3, file, 37, 8, 913);
			attr_dev(div0, "class", "info svelte-z3i04o");
			add_location(div0, file, 31, 4, 742);
			attr_dev(div1, "class", "container svelte-z3i04o");
			add_location(div1, file, 28, 2, 616);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t0);
			append_dev(div1, t1);
			append_dev(div1, img);
			append_dev(div1, t2);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div0, t4);
			append_dev(div0, p1);
			append_dev(p1, a0);
			append_dev(a0, t5);
			append_dev(div0, t6);
			append_dev(div0, p2);
			append_dev(p2, t7);
			append_dev(div0, t8);
			append_dev(div0, p3);
			append_dev(p3, a1);
			append_dev(a1, t9);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*info*/ 1 && t5_value !== (t5_value = /*info*/ ctx[0].telephone + "")) set_data_dev(t5, t5_value);

			if (dirty & /*info*/ 1 && a0_href_value !== (a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if (dirty & /*info*/ 1 && t9_value !== (t9_value = /*info*/ ctx[0].emailcontact + "")) set_data_dev(t9, t9_value);

			if (dirty & /*info*/ 1 && a1_href_value !== (a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos")) {
				attr_dev(a1, "href", a1_href_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
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

const infoQuery = gql`
      query infoBlast {
        infoBlast(id:"1"){
            telephone
            emailcontact
        }
      }
    `;

async function preload() {
	const client = new DefaultClient({
			uri: "https://www.grldfaure.xyz/graphql",
			fetch: this.fetch
		});

	const result = await client.query({ query: infoQuery });
	return { info: result.data.infoBlast };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Contact", slots, []);
	let { info } = $$props;
	const writable_props = ["info"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	$$self.$capture_state = () => ({
		ApolloClient: DefaultClient,
		gql,
		infoQuery,
		preload,
		info
	});

	$$self.$inject_state = $$props => {
		if ("info" in $$props) $$invalidate(0, info = $$props.info);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [info];
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { info: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*info*/ ctx[0] === undefined && !("info" in props)) {
			console.warn("<Contact> was created without expected prop 'info'");
		}
	}

	get info() {
		throw new Error("<Contact>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set info(value) {
		throw new Error("<Contact>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Contact;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNmZjYTIyNjcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvY29udGFjdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgLy9pbWFnZSBuZXdzbGV0dGVyXG4gICAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5cbiAgICBjb25zdCBpbmZvUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBpbmZvQmxhc3Qge1xuICAgICAgICBpbmZvQmxhc3QoaWQ6XCIxXCIpe1xuICAgICAgICAgICAgdGVsZXBob25lXG4gICAgICAgICAgICBlbWFpbGNvbnRhY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICAgICAgdXJpOiBcImh0dHBzOi8vd3d3LmdybGRmYXVyZS54eXovZ3JhcGhxbFwiLFxuICAgICAgICBmZXRjaDogdGhpcy5mZXRjaCxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGluZm9RdWVyeSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgaW5mbzogcmVzdWx0LmRhdGEuaW5mb0JsYXN0fTtcbiAgICB9ICAgIFxuICA8L3NjcmlwdD5cbiAgXG4gIDxzY3JpcHQ+XG4gICAgZXhwb3J0IGxldCBpbmZvO1xuICA8L3NjcmlwdD5cbiAgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8aDE+Q29udGFjdGV6LU5vdXMhPC9oMT5cbiAgICA8aW1nIHNyYz1cImxvZ28tNTEyLnBuZ1wiIGFsdD1cInVuZSBvZXV2cmUgZCd1biBtZW1icmUgZGUgQmxhc3RcIiAvPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgIDxwPlRoaWJhdWx0PC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzMze2luZm8udGVsZXBob25lfVwiPntpbmZvLnRlbGVwaG9uZX08L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+T3UgcGFyIEVtYWlsPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86e2luZm8udGVsZXBob25lfT9zdWJqZWN0PURlYW1uZGUgaW5mb3NcIj57aW5mby5lbWFpbGNvbnRhY3R9PC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIFxuICA8c3R5bGU+XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBtaW4taGVpZ2h0OiA1MHZoO1xuICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCIgLiB0aXRyZVwiXG4gICAgICAgIFwiaW1hZ2UgaW5mb1wiO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgIGJvcmRlcjogc29saWQgMnB4ICNFRjExQTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggNnB4IDE1cHggYmxhY2s7XG4gICAgfVxuICAgIGgxIHtcbiAgICBmb250LWZhbWlseTogaW50ZXJzdGF0ZSB0aGluO1xuICAgICAgZ3JpZC1hcmVhOiB0aXRyZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICBncmlkLWFyZWE6IGltYWdlO1xuICAgICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgICBwYWRkaW5nOjAgMCAxMCUgMTAlO1xuICAgICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gICAgLmluZm97XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcbiAgICAgICAgZ3JpZC1hcmVhOmluZm87XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmXG4gICAgfVxuICAgIGE6aG92ZXJ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNFRjExQTE7XG4gICAgfVxuICAgIEBtZWRpYShtYXgtd2lkdGg6NjYwcHgpe1xuICAgICAgLmNvbnRhaW5lcntcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHQgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgdG9wOjYwcHg7XG4gICAgICBtaW4taGVpZ2h0OiAwdmg7XG4gICAgICB3aWR0aDogOTB2dztcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwidGl0cmVcIlxuICAgICAgICBcImluZm9cIjtcbiAgICB9XG4gICAgaDEge1xuICAgICAgZ3JpZC1hcmVhOiB0aXRyZTtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuXHQgIFxuICAgIGltZ3tcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIH1cbiAgPC9zdHlsZT5cbiAgIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBa0MrQyxHQUFJLElBQUMsU0FBUzs7Ozs7Ozs7O3lCQUlRLEdBQUksSUFBQyxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFKekQsR0FBSSxJQUFDLFNBQVM7Ozs7OzZEQUlkLEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFKSSxHQUFJLElBQUMsU0FBUzs7cUZBQWhDLEdBQUksSUFBQyxTQUFTOzs7OytEQUkwQixHQUFJLElBQUMsWUFBWTs7cUZBQXpELEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BbENqQyxTQUFTLEdBQUcsR0FBRzs7Ozs7Ozs7O2VBUUMsT0FBTztPQUNyQixNQUFNLE9BQU9BLGFBQVk7R0FDN0IsR0FBRyxFQUFFLG1DQUFtQztHQUN4QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7OztPQUViLE1BQU0sU0FBUyxNQUFNLENBQUMsS0FBSyxHQUMvQixLQUFLLEVBQUUsU0FBUztVQUVULElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7OztPQUszQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
