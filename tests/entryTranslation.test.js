import test from 'node:test';
import assert from 'node:assert/strict';
import { achievements, createSampleBatch } from '../src/data/achievements.js';
import { localizeEntryField, localizeCaption, localizeImageAlt } from '../src/content/localizeEntry.js';
import { i18n } from '../src/content/translations.js';

test('all supplied achievements have Arabic counterparts for authored text', () => {
  assert.equal(achievements.length, 8);
  for (const entry of achievements) {
    for (const key of ['title', 'category', 'body', 'meta']) {
      assert.equal(typeof entry[`${key}Ar`], 'string', `${entry.id}: missing ${key}Ar`);
      assert.ok(entry[`${key}Ar`].trim(), `${entry.id}: empty ${key}Ar`);
    }
    if (entry.summary) assert.ok(entry.summaryAr?.trim(), `${entry.id}: missing summaryAr`);
    for (const link of entry.links ?? []) {
      assert.ok(link.labelAr?.trim(), `${entry.id}: missing link labelAr`);
      assert.ok(link.href, `${entry.id}: missing link destination`);
    }
  }
});

test('Arabic is used for entries, captions, and links; English stays unchanged', () => {
  const lit = achievements.find(e => e.id === 'lit-club');
  assert.equal(localizeEntryField(lit, 'title', 'ar'), 'نادي الأدب');
  assert.equal(localizeEntryField(lit, 'body', 'en'), lit.body);
  assert.equal(localizeEntryField(lit, 'body', 'ar'), lit.bodyAr);
  assert.equal(localizeCaption(lit, 'ar'), lit.metaAr);
  assert.equal(localizeCaption(lit, 'en'), lit.meta);
  const bot = achievements.find(e => e.id === 'discordbot');
  assert.equal(localizeEntryField(bot.links[0], 'label', 'ar'), 'إضافة بوت Potential Bot');
  assert.equal(localizeEntryField(bot.links[0], 'label', 'en'), 'Add Potential Bot');
});

test('optional custom captions and accessible image labels are supported', () => {
  const entry = {
    title: 'Album', titleAr: 'ألبوم', meta: '2026', metaAr: '٢٠٢٦',
    caption: 'This is a photo', captionAr: 'هذه صورة',
    imageAlt: 'Album photograph', imageAltAr: 'صورة الألبوم',
  };
  assert.equal(localizeCaption(entry, 'en'), 'This is a photo');
  assert.equal(localizeCaption(entry, 'ar'), 'هذه صورة');
  assert.equal(localizeImageAlt(entry, 'ar'), 'صورة الألبوم');
  assert.equal(localizeCaption({ ...entry, captionAr: undefined }, 'ar'), 'This is a photo');
});

test('Arabic fallback never removes an English value when an Ar field is missing', () => {
  const entry = { title: 'Only English', body: 'English body', meta: 'HTML' };
  assert.equal(localizeEntryField(entry, 'body', 'ar'), 'English body');
  assert.equal(localizeCaption(entry, 'ar'), 'HTML');
  assert.equal(localizeImageAlt(entry, 'ar'), 'صورة مرتبطة بـOnly English');
  assert.equal(localizeEntryField({ summary: 'x', summaryAr: '' }, 'summary', 'ar'), '');
});

test('generated samples carry localized descriptions and image caption metadata', () => {
  const list = createSampleBatch(0, 4);
  assert.equal(list.length, 4);
  list.forEach(entry => {
    for (const field of ['title', 'summary', 'body', 'category', 'meta']) {
      assert.ok(localizeEntryField(entry, field, 'ar'));
    }
  });
});

test('translation dictionaries contain identical key sets', () => {
  assert.deepEqual(Object.keys(i18n.en).sort(), Object.keys(i18n.ar).sort());
});
