import"@dropins/tools/event-bus.js";import{j as h,i as f,u as k}from"./getStoreConfig.js";import{s as b}from"./setBillingAddress.js";import{classes as S}from"@dropins/tools/lib.js";import{Checkbox as _,Skeleton as A,SkeletonRow as v}from"@dropins/tools/components.js";/* empty css                     */import{jsx as o}from"@dropins/tools/preact-jsx-runtime.js";import{useText as I}from"@dropins/tools/i18n.js";import{useState as B,useEffect as g}from"@dropins/tools/preact-compat.js";const x=({className:r,isInitialized:s=!0,checked:i=!0,...t})=>{const e=I({title:"Checkout.BillToShippingAddress.title"});return s?o("div",{className:S(["checkout-bill-to-shipping-address",r]),children:o(_,{"data-testid":"bill-to-shipping-checkbox",className:"checkout-bill-to-shipping-address__checkbox",checked:i,name:"checkout-bill-to-shipping-address__checkbox",label:e.title,...t})}):o(C,{})},C=()=>o(A,{className:"bill-to-shipping-address__skeleton",children:o(v,{variant:"row",size:"small"})}),m="is_bill_to_shipping_address";function y(r,s,i){const t=r[i],e=s[i];return t===void 0&&e===void 0||t===null&&e===null?!0:typeof t=="object"&&typeof e=="object"?JSON.stringify(t)===JSON.stringify(e):t===e}function N(r,s,i){return!s&&!i?!0:!s||!i?!1:r.every(t=>{const e=t.code;return y(s,i,e)})}const T=({isBillToShipping:r})=>{var a;const[s,i]=B(!1),{fields:t}=k(),e=f.value.data,d=(e==null?void 0:e.id)||"",p=!!e,l=e==null?void 0:e.billingAddress,u=(a=e==null?void 0:e.shippingAddresses)==null?void 0:a[0],c=!!u;return g(()=>{if(s)return;const n=localStorage.getItem(m);n&&(i(!0),r.value={checked:n==="true",setByUser:!1})},[s,r]),g(()=>{if(s||!t||!p)return;i(!0);const n=N(t,l,u);r.value={checked:l?n:r.value.checked,setByUser:!1}},[l,t,p,r,s,u]),{cartId:d,isInitialized:s,hasShippingAddress:c}},L=({children:r,...s})=>{const i=h.value.checked,{cartId:t,hasShippingAddress:e,isInitialized:d}=T({isBillToShipping:h});return o(x,{...s,checked:i,isInitialized:d,onChange:l=>{const c=l.target.checked;if(h.value={checked:c,setByUser:!0},localStorage.setItem(m,c.toString()),!d||!c||!e)return;const a=new AbortController;return b({signal:a.signal,cartId:t,input:{same_as_shipping:!0}}).catch(n=>{console.error(n)}),()=>{a.abort()}},disabled:f.value.pending})};export{L as B,m as a,N as c};
//# sourceMappingURL=BillToShippingAddress2.js.map
