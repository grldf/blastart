import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, m as insert_dev, n as append_dev, o as set_data_dev, p as noop } from './client.e3a9c99b.js';
import { g as gql, D as DefaultClient } from './bundle.esm.ce987c6b.js';

/* src/routes/Contact/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/Contact/index.svelte";

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
			add_location(h1, file, 29, 4, 661);
			if (img.src !== (img_src_value = "logo-512.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "une oeuvre d'un membre de Blast");
			attr_dev(img, "class", "svelte-z3i04o");
			add_location(img, file, 30, 4, 690);
			add_location(p0, file, 32, 8, 786);
			attr_dev(a0, "href", a0_href_value = "tel:+33" + /*info*/ ctx[0].telephone);
			attr_dev(a0, "class", "svelte-z3i04o");
			add_location(a0, file, 34, 12, 826);
			add_location(p1, file, 33, 8, 810);
			add_location(p2, file, 36, 8, 902);
			attr_dev(a1, "href", a1_href_value = "mailto:" + /*info*/ ctx[0].telephone + "?subject=Deamnde infos");
			attr_dev(a1, "class", "svelte-z3i04o");
			add_location(a1, file, 38, 12, 946);
			add_location(p3, file, 37, 8, 930);
			attr_dev(div0, "class", "info svelte-z3i04o");
			add_location(div0, file, 31, 4, 759);
			attr_dev(div1, "class", "container svelte-z3i04o");
			add_location(div1, file, 28, 2, 633);
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

async function preload({ params, query }) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTcyMzBjOGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvQ29udGFjdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gICAgLy9pbWFnZSBuZXdzbGV0dGVyXG4gICAgaW1wb3J0IEFwb2xsb0NsaWVudCwgeyBncWwgfSBmcm9tIFwiYXBvbGxvLWJvb3N0XCI7XG5cbiAgICBjb25zdCBpbmZvUXVlcnkgPSBncWxgXG4gICAgICBxdWVyeSBpbmZvQmxhc3Qge1xuICAgICAgICBpbmZvQmxhc3QoaWQ6XCIxXCIpe1xuICAgICAgICAgICAgdGVsZXBob25lXG4gICAgICAgICAgICBlbWFpbGNvbnRhY3RcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGA7XG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcbiAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgICAgICB1cmk6IFwiaHR0cHM6Ly93d3cuZ3JsZGZhdXJlLnh5ei9ncmFwaHFsXCIsXG4gICAgICAgIGZldGNoOiB0aGlzLmZldGNoLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeTogaW5mb1F1ZXJ5LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBpbmZvOiByZXN1bHQuZGF0YS5pbmZvQmxhc3R9O1xuICAgIH0gICAgXG4gIDwvc2NyaXB0PlxuICBcbiAgPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGluZm87XG4gIDwvc2NyaXB0PlxuICBcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxoMT5Db250YWN0ZXotTm91cyE8L2gxPlxuICAgIDxpbWcgc3JjPVwibG9nby01MTIucG5nXCIgYWx0PVwidW5lIG9ldXZyZSBkJ3VuIG1lbWJyZSBkZSBCbGFzdFwiIC8+XG4gICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgPHA+VGhpYmF1bHQ8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorMzN7aW5mby50ZWxlcGhvbmV9XCI+e2luZm8udGVsZXBob25lfTwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5PdSBwYXIgRW1haWw8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzp7aW5mby50ZWxlcGhvbmV9P3N1YmplY3Q9RGVhbW5kZSBpbmZvc1wiPntpbmZvLmVtYWlsY29udGFjdH08L2E+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgXG4gIDxzdHlsZT5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgICB3aWR0aDogNTB2dztcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICBcIiAuIHRpdHJlXCJcbiAgICAgICAgXCJpbWFnZSBpbmZvXCI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgYm9yZGVyOiBzb2xpZCAycHggI0VGMTFBMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMTVweCBibGFjaztcbiAgICB9XG4gICAgaDEge1xuICAgIGZvbnQtZmFtaWx5OiBpbnRlcnN0YXRlIHRoaW47XG4gICAgICBncmlkLWFyZWE6IHRpdHJlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGdyaWQtYXJlYTogaW1hZ2U7XG4gICAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICAgIHBhZGRpbmc6MCAwIDEwJSAxMCU7XG4gICAgICBmaWx0ZXI6IGludmVydCgxKTtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xuICAgICAgICBncmlkLWFyZWE6aW5mbztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIH1cbiAgICBhe1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgY29sb3I6ICNmZmZcbiAgICB9XG4gICAgYTpob3ZlcntcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgI0VGMTFBMTtcbiAgICB9XG4gICAgQG1lZGlhKG1heC13aWR0aDo2NjBweCl7XG4gICAgICAuY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdCAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0b3A6NjBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDB2aDtcbiAgICAgIHdpZHRoOiA5MHZ3O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgXCJ0aXRyZVwiXG4gICAgICAgIFwiaW5mb1wiO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICBncmlkLWFyZWE6IHRpdHJlO1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG5cdCAgXG4gICAgaW1ne1xuICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cbiAgfVxuICA8L3N0eWxlPlxuICAiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFrQytDLEdBQUksSUFBQyxTQUFTOzs7Ozs7Ozs7eUJBSVEsR0FBSSxJQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUp6RCxHQUFJLElBQUMsU0FBUzs7Ozs7NkRBSWQsR0FBSSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUpJLEdBQUksSUFBQyxTQUFTOztxRkFBaEMsR0FBSSxJQUFDLFNBQVM7Ozs7K0RBSTBCLEdBQUksSUFBQyxZQUFZOztxRkFBekQsR0FBSSxJQUFDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFsQ2pDLFNBQVMsR0FBRyxHQUFHOzs7Ozs7Ozs7ZUFRQyxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7T0FDckMsTUFBTSxPQUFPQSxhQUFZO0dBQzdCLEdBQUcsRUFBRSxtQ0FBbUM7R0FDeEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLOzs7T0FFYixNQUFNLFNBQVMsTUFBTSxDQUFDLEtBQUssR0FDL0IsS0FBSyxFQUFFLFNBQVM7VUFFVCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7Ozs7T0FLM0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
