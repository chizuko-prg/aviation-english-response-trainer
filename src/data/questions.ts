import { Question } from '../types';

export const QUESTIONS: Question[] = [
  // ===================================================================
  // Say Again / Confirm
  // ===================================================================
  {
    id: 'sac-001',
    category: 'say-again-confirm',
    difficulty: 'basic',
    situation:
      'タワーから周波数の変更指示を受けましたが、数字の一部が聞き取れませんでした。',
    task: '聞き取れなかったことを伝え、もう一度言ってもらうよう依頼してください。',
    sampleAnswerLevel4: 'Say again the frequency, please.',
    sampleAnswerLevel5:
      'Tower, say again the frequency, I did not copy the last part.',
    keyPhrases: ['say again', 'I did not copy', 'the last part'],
    selfCheckItems: [
      '「Say again」を正しく使えたか',
      'どの部分が聞き取れなかったか伝えられたか',
      '落ち着いたトーンで話せたか',
    ],
    safetyNote:
      '聞き取れないまま復唱すると誤った復唱になります。不明な点は必ず聞き返しましょう。',
  },
  {
    id: 'sac-002',
    category: 'say-again-confirm',
    difficulty: 'intermediate',
    situation:
      'グランドから滑走路までのタクシー経路を指示されましたが、経由するtaxiwayが正しいか確信が持てません。',
    task: '自分の理解した経路を述べ、それで合っているか確認してください。',
    sampleAnswerLevel4: 'Confirm taxi via Alpha and Bravo to runway three four.',
    sampleAnswerLevel5:
      'Ground, confirm taxi via Alpha, Bravo to runway three four, holding short of Charlie.',
    keyPhrases: ['confirm', 'taxi via', 'holding short of'],
    selfCheckItems: [
      '「Confirm」で確認の意図を示せたか',
      '経路を具体的に述べられたか',
      'taxiwayの読み方（phonetic）は正しかったか',
    ],
    safetyNote:
      '経路に少しでも疑問があれば必ず確認を。滑走路への誤進入は重大インシデントにつながります。',
  },
  {
    id: 'sac-003',
    category: 'say-again-confirm',
    difficulty: 'basic',
    situation:
      '管制官の送信が速く、こちらに対する指示なのか他機への指示なのか分かりませんでした。',
    task: '今のは自分宛だったのか確認してください。',
    sampleAnswerLevel4: 'Was that call for me?',
    sampleAnswerLevel5:
      'Confirm the last instruction was for my aircraft.',
    keyPhrases: ['confirm', 'last instruction', 'for my aircraft'],
    selfCheckItems: [
      '自分宛か確認する意図を伝えられたか',
      '短く明確に聞けたか',
      '推測で動こうとしなかったか',
    ],
    safetyNote:
      '自分宛か不明なまま行動すると、他機への指示を誤って実行する恐れがあります。',
  },
  {
    id: 'sac-004',
    category: 'say-again-confirm',
    difficulty: 'intermediate',
    situation:
      '上昇高度を指示されましたが、聞き取った数字に自信がありません。',
    task: '自分が聞き取った高度を述べ、合っているか確認してください。',
    sampleAnswerLevel4: 'Confirm climb to five thousand.',
    sampleAnswerLevel5:
      'Confirm climb and maintain five thousand, I want to verify the altitude.',
    keyPhrases: ['confirm', 'climb and maintain', 'verify'],
    selfCheckItems: [
      '聞き取った高度を声に出して確認できたか',
      '高度の読み方は正しかったか',
      '不確かなまま上昇を始めなかったか',
    ],
    safetyNote:
      '高度の取り違えは他機との間隔喪失に直結します。曖昧な時は必ず確認しましょう。',
  },
  {
    id: 'sac-005',
    category: 'say-again-confirm',
    difficulty: 'basic',
    situation: '管制官が早口で、全体的に聞き取れませんでした。',
    task: 'もっとゆっくり話してもらうよう依頼してください。',
    sampleAnswerLevel4: 'Speak slower, please.',
    sampleAnswerLevel5:
      'Say again slowly, please, I am a student pilot.',
    keyPhrases: ['speak slower', 'say again slowly', 'student pilot'],
    selfCheckItems: [
      'ゆっくり話す依頼を伝えられたか',
      '丁寧に依頼できたか',
      '自分の状況（student等）を添えられたか',
    ],
    safetyNote:
      '聞き取れないまま進めるより、ゆっくり話してもらう方が安全です。遠慮は不要です。',
  },
  {
    id: 'sac-006',
    category: 'say-again-confirm',
    difficulty: 'intermediate',
    situation:
      'スコークコード（トランスポンダ）の設定を指示されましたが、数字を聞き逃しました。',
    task: 'スコークコードをもう一度言ってもらうよう依頼してください。',
    sampleAnswerLevel4: 'Say again the squawk code.',
    sampleAnswerLevel5:
      'Say again the squawk, I did not get the four digits.',
    keyPhrases: ['say again', 'squawk', 'four digits'],
    selfCheckItems: [
      'スコークの聞き返しができたか',
      '何桁分からなかったか伝えられたか',
      '誤ったコードを設定しなかったか',
    ],
    safetyNote:
      '誤ったコードを設定すると管制側の識別に影響します。不確かな時は必ず確認を。',
  },
  {
    id: 'sac-007',
    category: 'say-again-confirm',
    difficulty: 'advanced',
    situation:
      '長い経路変更の指示を受けましたが、後半の地点名が複数あいまいでした。',
    task: '分かった部分を述べ、不確かな後半だけ言い直してもらってください。',
    sampleAnswerLevel4:
      'Say again all after [first point], [callsign].',
    sampleAnswerLevel5:
      'I copied up to [first point]. Say again all after that, slowly please, [callsign].',
    keyPhrases: ['say again all after', 'I copied up to', 'slowly please'],
    selfCheckItems: [
      'どこまで分かったか具体的に示せたか',
      '必要な部分だけ言い直しを頼めたか',
      '全部聞き返さず効率的に確認できたか',
    ],
    safetyNote:
      '部分的に分かっている時は、その範囲を伝えると交信が短く正確になります。',
  },
  {
    id: 'sac-008',
    category: 'say-again-confirm',
    difficulty: 'basic',
    situation:
      '着陸許可が出たように聞こえましたが、確信が持てません。',
    task: '着陸許可が出ているか確認してください。',
    sampleAnswerLevel4: 'Confirm cleared to land runway three four.',
    sampleAnswerLevel5:
      'Tower, confirm [callsign] is cleared to land runway three four, I did not catch a clear reply.',
    keyPhrases: ['confirm', 'cleared to land', 'runway'],
    selfCheckItems: [
      '着陸許可の確認ができたか',
      '滑走路番号を添えられたか',
      '許可未確認のまま進入を続けなかったか',
    ],
    safetyNote:
      '着陸許可の有無が不明なまま進入を続けるのは危険です。必ず確認しましょう。',
  },
  {
    id: 'sac-009',
    category: 'say-again-confirm',
    difficulty: 'intermediate',
    situation:
      '管制官の指示の意味は分かりましたが、自分の復唱が正しかったか反応がなく不安です。',
    task: '自分の復唱が正しかったか確認してください。',
    sampleAnswerLevel4: 'Confirm my readback is correct.',
    sampleAnswerLevel5:
      'Confirm my readback was correct, no response received.',
    keyPhrases: ['confirm', 'readback', 'correct'],
    selfCheckItems: [
      '復唱の確認を求められたか',
      '応答がなかった事実を伝えられたか',
      '思い込みで先に進まなかったか',
    ],
    safetyNote:
      '復唱への訂正がない＝正しい、とは限りません。不安な時は確認を取りましょう。',
  },
  {
    id: 'sac-010',
    category: 'say-again-confirm',
    difficulty: 'advanced',
    situation:
      '風向風速とともに滑走路変更を告げられましたが、新しい滑走路番号が聞き取れませんでした。',
    task: '風の情報は分かったが滑走路番号だけ確認したい、と伝えてください。',
    sampleAnswerLevel4: 'Confirm the new runway, I got the wind.',
    sampleAnswerLevel5:
      'I copied the wind, confirm the new landing runway, please.',
    keyPhrases: ['I copied the wind', 'confirm', 'landing runway'],
    selfCheckItems: [
      '分かった情報と不明な情報を切り分けられたか',
      '滑走路番号だけを的確に確認できたか',
      '交信を簡潔にまとめられたか',
    ],
    safetyNote:
      '滑走路の取り違えは重大な誤進入につながります。番号は確実に確認しましょう。',
  },

  // ===================================================================
  // Unable / Request
  // ===================================================================
  {
    id: 'unr-001',
    category: 'unable-request',
    difficulty: 'basic',
    situation:
      'アプローチから指示された高度への降下を、現在の状況ではすぐに開始できません。',
    task: 'その指示に従えないことを伝えてください。',
    sampleAnswerLevel4: 'Unable to descend at this time.',
    sampleAnswerLevel5:
      'Unable immediate descent, request descent in two miles.',
    keyPhrases: ['unable', 'at this time', 'request'],
    selfCheckItems: [
      '「Unable」をはっきり言えたか',
      '理由や代替案を添えられたか',
      '曖昧にせず明確に伝えられたか',
    ],
    safetyNote:
      '従えない指示に無理に従うのは危険です。「Unable」は正当な応答です。',
  },
  {
    id: 'unr-002',
    category: 'unable-request',
    difficulty: 'intermediate',
    situation:
      '前方に雷雲があり、現在のヘディングを維持できません。左への変針が必要です。',
    task: '気象を理由に、左へのヘディング変更を要求してください。',
    sampleAnswerLevel4: 'Request heading two seven zero due to weather.',
    sampleAnswerLevel5:
      'Request left turn heading two seven zero to avoid weather, will advise when able to resume.',
    keyPhrases: ['request', 'due to weather', 'to avoid', 'will advise'],
    selfCheckItems: [
      '要求の理由（weather）を伝えられたか',
      '希望するヘディングを明確に述べられたか',
      '今後の意図を添えられたか',
    ],
    safetyNote: '悪天回避は安全上の正当な要求です。早めに意図を伝えましょう。',
  },
  {
    id: 'unr-003',
    category: 'unable-request',
    difficulty: 'basic',
    situation:
      '滑走路に向けてタクシー中ですが、出発前にもう少し準備の時間が欲しいです。',
    task: '少し待機したいと依頼してください。',
    sampleAnswerLevel4: 'Request short delay before departure.',
    sampleAnswerLevel5:
      'Request a short delay, I need a moment to complete my checks.',
    keyPhrases: ['request', 'short delay', 'complete my checks'],
    selfCheckItems: [
      '待機の依頼を伝えられたか',
      '理由を簡潔に添えられたか',
      '焦らず落ち着いて要求できたか',
    ],
    safetyNote:
      '準備不足のまま離陸するより、待機を求める方が安全です。遠慮は不要です。',
  },
  {
    id: 'unr-004',
    category: 'unable-request',
    difficulty: 'intermediate',
    situation:
      '指示された上昇率では性能的に上がりきれません。',
    task: 'その上昇率では上がれないことを伝え、可能な範囲を示してください。',
    sampleAnswerLevel4: 'Unable that climb rate, best rate only.',
    sampleAnswerLevel5:
      'Unable the requested climb rate, best rate of climb is all I can give.',
    keyPhrases: ['unable', 'climb rate', 'best rate of climb'],
    selfCheckItems: [
      '性能上の制約を伝えられたか',
      '可能な範囲を具体的に示せたか',
      '無理な指示を受け流さなかったか',
    ],
    safetyNote:
      '性能を超える指示は無理に受けず、できる範囲を明確に伝えましょう。',
  },
  {
    id: 'unr-005',
    category: 'unable-request',
    difficulty: 'basic',
    situation:
      '指定された場周経路より、フルストップではなくタッチアンドゴーをしたいです。',
    task: 'タッチアンドゴーを要求してください。',
    sampleAnswerLevel4: 'Request touch and go.',
    sampleAnswerLevel5:
      'Request touch and go, then one more circuit, [callsign].',
    keyPhrases: ['request', 'touch and go', 'one more circuit'],
    selfCheckItems: [
      'やりたい操作を明確に要求できたか',
      '簡潔に伝えられたか',
      '許可前提の言い方ができたか',
    ],
    safetyNote:
      'やりたい操作は事前に要求し、許可を得てから実施しましょう。“The option” can include touch-and-go, stop-and-go, low approach, missed approach, or full stop. If you only want touch and go, say that clearly.',
  },
  {
    id: 'unr-006',
    category: 'unable-request',
    difficulty: 'intermediate',
    situation:
      '指定された待機地点ではなく、より手前で待機したいです。',
    task: '手前の地点での待機を要求してください。',
    sampleAnswerLevel4: 'Request hold short of the next taxiway.',
    sampleAnswerLevel5:
      'Request to hold short of the next intersection instead, if able.',
    keyPhrases: ['request', 'hold short of', 'if able'],
    selfCheckItems: [
      '希望する待機地点を伝えられたか',
      '代替案として丁寧に要求できたか',
      '地点を具体的に示せたか',
    ],
    safetyNote:
      '待機地点の認識ズレは誤進入の原因です。希望は明確に伝えましょう。',
  },
  {
    id: 'unr-007',
    category: 'unable-request',
    difficulty: 'advanced',
    situation:
      '混雑により指示された経路では時間がかかりすぎ、燃料に余裕がなくなりつつあります。',
    task: '燃料状況を理由に、より直接的な経路を要求してください。',
    sampleAnswerLevel4: 'Request direct routing due to fuel.',
    sampleAnswerLevel5:
      'Request a more direct routing due to fuel considerations, not an emergency yet.',
    keyPhrases: ['request', 'direct routing', 'fuel considerations', 'not an emergency'],
    selfCheckItems: [
      '燃料を理由に要求できたか',
      '緊急ではないと明示できたか',
      '早めに状況を共有できたか',
    ],
    safetyNote:
      '燃料の余裕が減ってきたら、緊急になる前に早めに要求や共有をしましょう。In real operations, “minimum fuel” is an official advisory used when you cannot accept undue delay. It is not the same as declaring an emergency. Follow your instructor, company, and official procedures.',
  },
  {
    id: 'unr-008',
    category: 'unable-request',
    difficulty: 'basic',
    situation:
      '指示された速度まで減速できません。もう少し速度が必要です。',
    task: 'その速度まで落とせないことを伝えてください。',
    sampleAnswerLevel4: 'Unable that speed, too slow.',
    sampleAnswerLevel5:
      'Unable the requested speed, I need a higher speed for control.',
    keyPhrases: ['unable', 'requested speed', 'higher speed'],
    selfCheckItems: [
      '減速できない旨を伝えられたか',
      '安全上の理由を添えられたか',
      '明確に「Unable」と言えたか',
    ],
    safetyNote:
      '安全な操縦に必要な速度を下回る指示には従えません。明確に伝えましょう。',
  },
  {
    id: 'unr-009',
    category: 'unable-request',
    difficulty: 'intermediate',
    situation:
      '指示された出発方向と逆の方向へ進みたいです。',
    task: '別方向への出発を要求してください。',
    sampleAnswerLevel4: 'Request departure to the north instead.',
    sampleAnswerLevel5:
      'Request northbound departure instead of the assigned direction, if able.',
    keyPhrases: ['request', 'departure', 'instead', 'if able'],
    selfCheckItems: [
      '希望する方向を伝えられたか',
      '代替要求として丁寧に言えたか',
      '方角を正しく言えたか',
    ],
    safetyNote:
      '意図と異なる方向に進むと混乱のもとです。希望は出発前に伝えましょう。',
  },
  {
    id: 'unr-010',
    category: 'unable-request',
    difficulty: 'advanced',
    situation:
      '指示された進入方式が自分の習熟度的に難しく、別のより簡単な進入を希望します。',
    task: '理由を添えて、別の進入方式を要求してください。',
    sampleAnswerLevel4: 'Request a visual approach, I am a student pilot.',
    sampleAnswerLevel5:
      'Request a visual approach instead, I am still in training and more comfortable with it.',
    keyPhrases: ['request', 'visual approach', 'in training', 'comfortable'],
    selfCheckItems: [
      '希望する進入方式を伝えられたか',
      '訓練生である状況を添えられたか',
      '無理せず安全側の選択を要求できたか',
    ],
    safetyNote:
      '習熟度に不安がある方式は無理に受けず、安全に行える方法を要求しましょう。',
  },

  // ===================================================================
  // Situation Report
  // ===================================================================
  {
    id: 'sit-001',
    category: 'situation-report',
    difficulty: 'basic',
    situation:
      'タワーから現在位置の報告を求められました。あなたは空港の南10マイル、高度3000フィートです。',
    task: '自機の位置と高度を報告してください。',
    sampleAnswerLevel4: 'One zero miles south, three thousand feet.',
    sampleAnswerLevel5:
      'Position one zero miles south of the field, three thousand feet, inbound for landing.',
    keyPhrases: ['miles south', 'thousand feet', 'inbound'],
    selfCheckItems: [
      '位置を方角と距離で言えたか',
      '高度を正しい読み方で言えたか',
      '意図（inbound等）を添えられたか',
    ],
    safetyNote:
      '位置報告は方角・距離・高度を簡潔に。正確な共有が安全間隔の基礎です。',
  },
  {
    id: 'sit-002',
    category: 'situation-report',
    difficulty: 'advanced',
    situation:
      '訓練空域での作業を終え、帰投します。残燃料は1時間30分、搭乗者は2名です。',
    task: '作業終了と帰投の意図、必要な情報を簡潔に報告してください。',
    sampleAnswerLevel4:
      'Maneuvers complete, returning to the field, fuel one hour three zero, two on board.',
    sampleAnswerLevel5:
      'Training maneuvers complete. We are returning to the field with fuel endurance one hour three zero minutes and two persons on board.',
    keyPhrases: ['maneuvers complete', 'fuel one hour three zero', 'two on board', 'persons on board'],
    selfCheckItems: [
      '現在の活動状況を伝えられたか',
      '燃料・搭乗者数を正しく報告できたか',
      '情報を整理して簡潔に話せたか',
    ],
    safetyNote:
      '燃料や搭乗者数は正確に。誤った数字は緊急時の対応判断に影響します。',
  },
  {
    id: 'sit-003',
    category: 'situation-report',
    difficulty: 'basic',
    situation:
      '場周経路のダウンウィンドに入りました。タワーへ位置を報告します。',
    task: 'ダウンウィンドにいることを報告してください。',
    sampleAnswerLevel4: 'Left downwind runway three four.',
    sampleAnswerLevel5:
      'Entering left downwind for runway three four, full stop.',
    keyPhrases: ['left downwind', 'runway', 'full stop'],
    selfCheckItems: [
      '場周のどの位置か伝えられたか',
      '滑走路番号を添えられたか',
      '着陸の意図を示せたか',
    ],
    safetyNote:
      '場周での位置報告は他機との位置関係把握に不可欠です。明確に伝えましょう。',
  },
  {
    id: 'sit-004',
    category: 'situation-report',
    difficulty: 'intermediate',
    situation:
      '指定された地点を通過しました。通過地点と高度を報告します。',
    task: '地点通過の報告をしてください。',
    sampleAnswerLevel4: 'Over the lake, three thousand five hundred.',
    sampleAnswerLevel5:
      'Passing the lake at three thousand five hundred, continuing inbound.',
    keyPhrases: ['passing', 'continuing inbound', 'thousand five hundred'],
    selfCheckItems: [
      '通過地点を伝えられたか',
      '高度を正しく言えたか',
      '今後の動きを添えられたか',
    ],
    safetyNote:
      '報告地点の通過は正確に。位置の共有が他機との間隔維持を支えます。',
  },
  {
    id: 'sit-005',
    category: 'situation-report',
    difficulty: 'basic',
    situation:
      '空港から離れた訓練空域に到着しました。これから作業を始めます。',
    task: '訓練空域に到着し作業を開始することを報告してください。',
    sampleAnswerLevel4: 'In the practice area, starting maneuvers.',
    sampleAnswerLevel5:
      'Established in the practice area, beginning maneuvers at four thousand.',
    keyPhrases: ['practice area', 'beginning maneuvers', 'established'],
    selfCheckItems: [
      '到着と作業開始を伝えられたか',
      '高度を添えられたか',
      '簡潔に報告できたか',
    ],
    safetyNote:
      '作業開始前の位置共有は、同じ空域の他機との安全確保に役立ちます。',
  },
  {
    id: 'sit-006',
    category: 'situation-report',
    difficulty: 'intermediate',
    situation:
      '他機を視認するよう指示され、実際に視認できました。',
    task: '相手機を視認したことを報告してください。',
    sampleAnswerLevel4: 'Traffic in sight.',
    sampleAnswerLevel5:
      'Traffic in sight, I will maintain visual separation.',
    keyPhrases: ['traffic in sight', 'maintain visual separation'],
    selfCheckItems: [
      '視認できたことを伝えられたか',
      '今後の対応を添えられたか',
      '簡潔に応答できたか',
    ],
    safetyNote:
      '視認できていないのに「in sight」と言ってはいけません。確実に見えた時だけ報告を。',
  },
  {
    id: 'sit-007',
    category: 'situation-report',
    difficulty: 'advanced',
    situation:
      '指示された他機がどうしても見つけられません。',
    task: '相手機が見えないことを報告してください。',
    sampleAnswerLevel4: 'Negative contact, looking for traffic.',
    sampleAnswerLevel5:
      'Negative contact, still looking, request traffic update.',
    keyPhrases: ['negative contact', 'looking for traffic', 'traffic update'],
    selfCheckItems: [
      '視認できていないと正直に伝えられたか',
      '探している旨を示せたか',
      '追加情報を求められたか',
    ],
    safetyNote:
      '見えていないのに見えたと言うのは危険です。視認できない時は正直に伝えましょう。',
  },
  {
    id: 'sit-008',
    category: 'situation-report',
    difficulty: 'basic',
    situation:
      'ファイナルアプローチに入りました。タワーへ報告します。',
    task: 'ファイナルにいることを報告してください。',
    sampleAnswerLevel4: 'On final runway three four.',
    sampleAnswerLevel5:
      'On final for runway three four, full stop landing.',
    keyPhrases: ['on final', 'runway', 'full stop'],
    selfCheckItems: [
      'ファイナルにいることを伝えられたか',
      '滑走路番号を添えられたか',
      '着陸の種類を示せたか',
    ],
    safetyNote:
      'ファイナルでの位置報告は着陸許可の前提です。明確に伝えましょう。',
  },
  {
    id: 'sit-009',
    category: 'situation-report',
    difficulty: 'intermediate',
    situation:
      '指定高度に到達し、その高度を維持しています。',
    task: '指定高度に到達し維持していることを報告してください。',
    sampleAnswerLevel4: 'Level at five thousand.',
    sampleAnswerLevel5:
      'Level at five thousand, maintaining heading.',
    keyPhrases: ['level at', 'maintaining', 'thousand'],
    selfCheckItems: [
      '到達高度を報告できたか',
      '維持していることを示せたか',
      '高度を正しく言えたか',
    ],
    safetyNote:
      '指定高度への到達報告は管制の高度管理を助けます。正確に伝えましょう。',
  },
  {
    id: 'sit-010',
    category: 'situation-report',
    difficulty: 'advanced',
    situation:
      '視程が落ちてきて、目的の空港が見えにくくなっています。状況を共有したいです。',
    task: '視程の悪化と現在の状況を報告してください。',
    sampleAnswerLevel4:
      'Visibility is getting worse, request vectors to the field.',
    sampleAnswerLevel5:
      'Visibility is decreasing, I do not have the field in sight, request vectors to the field.',
    keyPhrases: ['visibility decreasing', 'not in sight', 'request vectors'],
    selfCheckItems: [
      '視程悪化を伝えられたか',
      '空港を視認できていない事実を示せたか',
      '早めに支援を求められたか',
    ],
    safetyNote:
      '視程悪化は早めに共有を。見えないまま進入を続けず、支援を求めましょう。状況がさらに悪化する場合は、PAN-PANやMAYDAYの宣言をためらわないでください。ただし実運航では、教官・会社・公式手順に従ってください。',
  },

  // ===================================================================
  // Abnormal / Emergency
  // ===================================================================
  {
    id: 'abn-001',
    category: 'abnormal-emergency',
    difficulty: 'intermediate',
    situation:
      'エンジン計器に異常を示す表示が出ました。直ちに緊急ではありませんが、注意が必要な状況です。',
    task: 'PAN-PANを用いて、状況をATCに伝えてください。',
    sampleAnswerLevel4:
      'Pan-pan, pan-pan, pan-pan, [callsign], engine indication problem, request return to the field.',
    sampleAnswerLevel5:
      'Pan-pan, pan-pan, pan-pan, [callsign], abnormal engine indication, request priority handling for return to the field, two persons on board.',
    keyPhrases: ['pan-pan', 'abnormal indication', 'request priority', 'persons on board'],
    selfCheckItems: [
      'PAN-PANを3回繰り返せたか',
      '状況を簡潔に伝えられたか',
      '必要な支援を要求できたか',
    ],
    safetyNote:
      'PAN-PANは緊急未満の異常事態に用います。生命に差し迫った危険がある場合はMAYDAYを使用します。',
  },
  {
    id: 'abn-002',
    category: 'abnormal-emergency',
    difficulty: 'advanced',
    situation:
      'エンジンが停止し、直ちに緊急着陸が必要な状況です。生命に差し迫った危険があります。',
    task: 'MAYDAYを用いて、緊急事態と必要な情報を伝えてください。',
    sampleAnswerLevel4:
      'Mayday, mayday, mayday, [callsign], engine failure, forced landing, two persons on board.',
    sampleAnswerLevel5:
      'Mayday, mayday, mayday, [callsign], engine failure, attempting forced landing, position five miles north of the field, two persons on board, requesting immediate assistance.',
    keyPhrases: ['mayday', 'engine failure', 'forced landing', 'requesting immediate assistance'],
    selfCheckItems: [
      'MAYDAYを3回繰り返せたか',
      '緊急の性質・意図・位置・搭乗者数を伝えられたか',
      '切迫した状況でも順序立てて話せたか',
    ],
    safetyNote:
      'MAYDAYは生命や機体に差し迫った危険がある最優先の緊急通報です。落ち着いて、伝えるべき情報を順に伝えましょう。本アプリは練習用です。実運航では教官・会社・公式手順に従ってください。',
  },
  {
    id: 'abn-003',
    category: 'abnormal-emergency',
    difficulty: 'basic',
    situation:
      '無線の調子が悪く、こちらの送信が届いているか不安です。',
    task: '送信が聞こえているか確認してください。',
    sampleAnswerLevel4: '[callsign], how do you read?',
    sampleAnswerLevel5:
      'How do you read me? I think I have a radio problem.',
    keyPhrases: ['how do you read', 'radio problem'],
    selfCheckItems: [
      '受信状況の確認を求められたか',
      '無線トラブルの可能性を伝えられたか',
      '落ち着いて確認できたか',
    ],
    safetyNote:
      '無線不調は早めに確認を。完全に通信が途絶える前に状況を共有しましょう。',
  },
  {
    id: 'abn-004',
    category: 'abnormal-emergency',
    difficulty: 'intermediate',
    situation:
      '客室内に軽い煙のにおいがしますが、火は見えません。注意が必要な状況です。',
    task: 'PAN-PANで煙のにおいを報告し、着陸の優先を要求してください。',
    sampleAnswerLevel4:
      'Pan-pan, pan-pan, pan-pan, [callsign], smell of smoke in the cabin, request to land.',
    sampleAnswerLevel5:
      'Pan-pan, pan-pan, pan-pan, [callsign], smell of smoke in the cabin, no fire visible, request priority to land.',
    keyPhrases: ['pan-pan', 'smell of smoke', 'no fire visible', 'request priority'],
    selfCheckItems: [
      'PAN-PANで状況を伝えられたか',
      '見える範囲の事実を正確に述べられたか',
      '着陸の優先を要求できたか',
    ],
    safetyNote:
      '煙のにおいは軽視できません。状況が悪化する前に早めに優先着陸を求めましょう。煙や火が悪化した場合は、ためらわずMAYDAYに切り替えて緊急事態を宣言してください。実運航では教官・会社・公式手順に従ってください。',
  },
  {
    id: 'abn-005',
    category: 'abnormal-emergency',
    difficulty: 'advanced',
    situation:
      '操縦系統の一部に違和感があり、機体のコントロールが難しくなってきています。',
    task: 'MAYDAYで操縦困難を伝え、即時の支援を要求してください。',
    sampleAnswerLevel4:
      'Mayday, mayday, mayday, [callsign], control problem, request immediate help.',
    sampleAnswerLevel5:
      'Mayday, mayday, mayday, [callsign], I have a control problem, difficult to fly, request immediate assistance and vectors to the nearest field.',
    keyPhrases: ['mayday', 'control problem', 'immediate assistance', 'nearest field'],
    selfCheckItems: [
      'MAYDAYで緊急を宣言できたか',
      '操縦困難の状況を伝えられたか',
      '必要な支援を具体的に求められたか',
    ],
    safetyNote:
      '操縦に支障が出たら迷わずMAYDAYを。早い宣言ほど支援を受けやすくなります。',
  },
  {
    id: 'abn-006',
    category: 'abnormal-emergency',
    difficulty: 'basic',
    situation:
      '体調が急に悪くなってきましたが、まだ操縦は続けられます。早めに降りたいです。',
    task: '体調不良を伝え、早めの着陸を要求してください。',
    sampleAnswerLevel4:
      'Pan-pan, pan-pan, pan-pan, [callsign], I feel sick, request to land soon.',
    sampleAnswerLevel5:
      'Pan-pan, pan-pan, pan-pan, [callsign], I am not feeling well, still able to fly, request to land as soon as possible.',
    keyPhrases: ['pan-pan', 'not feeling well', 'still able to fly', 'as soon as possible'],
    selfCheckItems: [
      '体調不良を伝えられたか',
      'まだ操縦可能と示せたか',
      '早めの着陸を要求できたか',
    ],
    safetyNote:
      '体調不良は我慢せず早めに共有を。悪化する前に着陸の準備を進めましょう。',
  },
  {
    id: 'abn-007',
    category: 'abnormal-emergency',
    difficulty: 'intermediate',
    situation:
      '残燃料が想定より少なく、このままでは余裕がなくなりそうです。まだ緊急ではありません。',
    task: 'PAN-PANで燃料の状況を伝え、優先着陸を要求してください。',
    sampleAnswerLevel4:
      'Pan-pan, pan-pan, pan-pan, [callsign], low fuel, request priority to land.',
    sampleAnswerLevel5:
      'Pan-pan, pan-pan, pan-pan, [callsign], low fuel, request priority for landing, no delay acceptable.',
    keyPhrases: ['pan-pan', 'low fuel', 'request priority', 'no delay acceptable'],
    selfCheckItems: [
      'PAN-PANで燃料状況を伝えられたか',
      'まだ緊急ではないと示せたか',
      '優先着陸を要求できたか',
    ],
    safetyNote:
      '燃料は緊急になる前の共有が肝心です。状況が悪化したら速やかにMAYDAYへ切り替えます。実運航では “minimum fuel” という公式のアドバイザリ手続きがあります。教官・会社・公式手順に従ってください。',
  },
  {
    id: 'abn-008',
    category: 'abnormal-emergency',
    difficulty: 'advanced',
    situation:
      '緊急事態を宣言して対応中でしたが、状況が安定し、危険が去りました。',
    task: '緊急状態を解除することを伝えてください。',
    sampleAnswerLevel4:
      'Cancel mayday, [callsign], situation is under control.',
    sampleAnswerLevel5:
      'Cancel mayday, [callsign], the situation is now under control, continuing to land normally.',
    keyPhrases: ['cancel mayday', 'under control', 'continuing to land'],
    selfCheckItems: [
      '緊急解除を明確に伝えられたか',
      '状況が安定した旨を示せたか',
      '今後の意図を添えられたか',
    ],
    safetyNote:
      '危険が去ったら速やかに緊急を解除しましょう。管制や他機への影響を減らせます。',
  },
  {
    id: 'abn-009',
    category: 'abnormal-emergency',
    difficulty: 'intermediate',
    situation:
      '緊急事態の最中で、管制官から搭乗者数と残燃料を尋ねられました。',
    task: '搭乗者数と残燃料を報告してください。',
    sampleAnswerLevel4:
      'Two persons on board, fuel one hour, [callsign].',
    sampleAnswerLevel5:
      'Two persons on board, fuel endurance about one hour remaining.',
    keyPhrases: ['persons on board', 'fuel endurance', 'remaining'],
    selfCheckItems: [
      '搭乗者数を正確に伝えられたか',
      '残燃料を時間で示せたか',
      '緊急下でも落ち着いて答えられたか',
    ],
    safetyNote:
      '搭乗者数と燃料は救助計画の基礎情報です。正確に、はっきり伝えましょう。',
  },
  {
    id: 'abn-010',
    category: 'abnormal-emergency',
    difficulty: 'advanced',
    situation:
      '緊急事態で、最寄りの空港への誘導（ベクター）を必要としています。',
    task: 'MAYDAYに続けて、最寄り空港へのベクターを要求してください。',
    sampleAnswerLevel4:
      'Mayday, mayday, mayday, [callsign], request vectors to the nearest airport.',
    sampleAnswerLevel5:
      'Mayday, mayday, mayday, [callsign], request vectors to the nearest suitable airport, standing by for headings.',
    keyPhrases: ['mayday', 'request vectors', 'nearest suitable airport', 'standing by'],
    selfCheckItems: [
      'MAYDAYに続けて要求できたか',
      '最寄り空港への誘導を求められたか',
      '指示待ちの姿勢を示せたか',
    ],
    safetyNote:
      '緊急時は遠慮せず誘導を要求しましょう。管制の支援を最大限活用することが安全につながります。',
  },

  // ===================================================================
  // Training Flight Plain English
  // ===================================================================
  {
    id: 'trn-001',
    category: 'training-plain-english',
    difficulty: 'intermediate',
    situation:
      '管制官に、これから空域で実施する訓練内容（スローフライトとスティープターン）を平易な英語で説明する必要があります。',
    task: '定型文ではなく、自分の言葉でこれから行う作業を説明してください。',
    sampleAnswerLevel4:
      'We will do slow flight and steep turns in this area for about twenty minutes.',
    sampleAnswerLevel5:
      'We are planning to practice slow flight and steep turns in this area, expecting to remain for about twenty minutes, will advise when complete.',
    keyPhrases: ['we will', 'practice', 'remain for', 'will advise when complete'],
    selfCheckItems: [
      '訓練内容を平易な英語で説明できたか',
      '所要時間の見込みを伝えられたか',
      '文法が多少崩れても意味が通じたか',
    ],
    safetyNote:
      '訓練内容と滞在時間を共有すると、同じ空域の他機との安全確保に役立ちます。',
  },
  {
    id: 'trn-002',
    category: 'training-plain-english',
    difficulty: 'advanced',
    situation:
      '教官役の管制官から「なぜ今アプローチをやり直したのか」と平易な英語で質問されました。',
    task: 'ゴーアラウンドを決めた理由を、自分の言葉で説明してください。',
    sampleAnswerLevel4:
      'I was too high and too fast, so I decided to go around.',
    sampleAnswerLevel5:
      'I was high on the approach and not stabilized, so I judged it was safer to go around and try again.',
    keyPhrases: ['too high', 'not stabilized', 'go around', 'safer to'],
    selfCheckItems: [
      '判断の理由を説明できたか',
      '安全を優先した意図を伝えられたか',
      '即興でも筋道立てて話せたか',
    ],
    safetyNote:
      '不安定なアプローチでのゴーアラウンドは正しい判断です。理由を言語化する力も航空英語の一部です。',
  },
  {
    id: 'trn-003',
    category: 'training-plain-english',
    difficulty: 'basic',
    situation:
      '管制官に、自分が訓練生で、まだ経験が浅いことを伝えておきたいです。',
    task: '自分が訓練生であることを伝えてください。',
    sampleAnswerLevel4: 'I am a student pilot.',
    sampleAnswerLevel5:
      'Just so you know, I am a student pilot, still learning.',
    keyPhrases: ['student pilot', 'still learning'],
    selfCheckItems: [
      '訓練生であると伝えられたか',
      '丁寧に状況を共有できたか',
      '短く自然に言えたか',
    ],
    safetyNote:
      '訓練生であると伝えると、管制官がより配慮した対応をしてくれることがあります。',
  },
  {
    id: 'trn-004',
    category: 'training-plain-english',
    difficulty: 'intermediate',
    situation:
      '管制官から「次に何をするつもりか」と尋ねられました。もう一周場周を回りたいです。',
    task: 'もう一周したいという意図を、自分の言葉で説明してください。',
    sampleAnswerLevel4:
      'I would like to do one more circuit.',
    sampleAnswerLevel5:
      'I would like to fly one more circuit for practice, then full stop.',
    keyPhrases: ['I would like to', 'one more circuit', 'for practice'],
    selfCheckItems: [
      '次の意図を伝えられたか',
      '練習目的だと示せたか',
      '最終的な予定も添えられたか',
    ],
    safetyNote:
      '自分の意図を先に伝えると、管制官が場周の流れを組み立てやすくなります。',
  },
  {
    id: 'trn-005',
    category: 'training-plain-english',
    difficulty: 'basic',
    situation:
      '管制官の指示は理解しましたが、実行に少し時間がかかりそうです。',
    task: '理解したこと、そして少し時間がかかることを伝えてください。',
    sampleAnswerLevel4:
      'Understood, it will take me a moment.',
    sampleAnswerLevel5:
      'Understood, I need a little time to set up, will let you know.',
    keyPhrases: ['understood', 'a little time', 'will let you know'],
    selfCheckItems: [
      '理解したと伝えられたか',
      '時間が必要だと示せたか',
      '後で報告する意図を添えられたか',
    ],
    safetyNote:
      '準備に時間が要るときは、黙って遅れるより一言伝える方が安全です。',
  },
  {
    id: 'trn-006',
    category: 'training-plain-english',
    difficulty: 'intermediate',
    situation:
      '管制官から、なぜ予定より低い高度を飛んでいるのか尋ねられました。雲を避けるためです。',
    task: '雲を避けて低く飛んでいる理由を、自分の言葉で説明してください。',
    sampleAnswerLevel4:
      'I am staying low to avoid the clouds.',
    sampleAnswerLevel5:
      'I am flying lower than planned to stay clear of the clouds above me.',
    keyPhrases: ['staying low', 'to avoid', 'stay clear of'],
    selfCheckItems: [
      '低く飛ぶ理由を説明できたか',
      '雲との関係を伝えられたか',
      '自然な言い回しで言えたか',
    ],
    safetyNote:
      '雲を避ける判断は適切です。その理由を共有すると管制官も状況を把握しやすくなります。',
  },
  {
    id: 'trn-007',
    category: 'training-plain-english',
    difficulty: 'advanced',
    situation:
      '教官役の管制官から「今の着陸はどうだったと思うか」と感想を求められました。',
    task: '自分の着陸について、良かった点と課題を平易な英語で述べてください。',
    sampleAnswerLevel4:
      'The landing was okay, but a little hard.',
    sampleAnswerLevel5:
      'I think the landing was okay, but I touched down a bit hard, I need to work on the flare.',
    keyPhrases: ['I think', 'touched down', 'a bit hard', 'work on'],
    selfCheckItems: [
      '自分の操作を振り返って言えたか',
      '良かった点と課題を分けられたか',
      '即興でも具体的に説明できたか',
    ],
    safetyNote:
      '自分の操作を言葉で振り返る力は、英語力と操縦技量の両方を伸ばします。',
  },
  {
    id: 'trn-008',
    category: 'training-plain-english',
    difficulty: 'basic',
    situation:
      '管制官の指示が理解できず、どうすればよいか分かりません。',
    task: '指示が分からないので、どうすればよいか平易な英語で尋ねてください。',
    sampleAnswerLevel4:
      'I do not understand, what should I do?',
    sampleAnswerLevel5:
      'Sorry, I do not understand the instruction, can you tell me what to do?',
    keyPhrases: ['I do not understand', 'what should I do', 'can you tell me'],
    selfCheckItems: [
      '分からないと正直に伝えられたか',
      'どうすべきか尋ねられたか',
      '丁寧に質問できたか',
    ],
    safetyNote:
      '分からないまま動くのは危険です。理解できない時は遠慮なく尋ねましょう。',
  },
  {
    id: 'trn-009',
    category: 'training-plain-english',
    difficulty: 'intermediate',
    situation:
      '管制官から、空域での作業がいつ終わるか尋ねられました。あと10分ほどで終わる予定です。',
    task: 'あと10分ほどで終わる見込みを、自分の言葉で伝えてください。',
    sampleAnswerLevel4:
      'About ten more minutes, then I will be done.',
    sampleAnswerLevel5:
      'I need about ten more minutes, then I will be finished and head back.',
    keyPhrases: ['about ten more minutes', 'finished', 'head back'],
    selfCheckItems: [
      '残り時間の見込みを伝えられたか',
      '終了後の予定を添えられたか',
      '自然な表現で言えたか',
    ],
    safetyNote:
      '作業終了の見込みを共有すると、管制官が空域や経路の調整をしやすくなります。',
  },
  {
    id: 'trn-010',
    category: 'training-plain-english',
    difficulty: 'advanced',
    situation:
      '教官役の管制官から、今日のフライト全体を振り返って何を学んだか尋ねられました。',
    task: '今日学んだことを、自分の言葉で簡潔に説明してください。',
    sampleAnswerLevel4:
      'Today I learned to keep a better lookout.',
    sampleAnswerLevel5:
      'Today I learned the importance of keeping a good lookout and staying ahead of the aircraft.',
    keyPhrases: ['I learned', 'keep a good lookout', 'stay ahead of the aircraft'],
    selfCheckItems: [
      '学んだことを具体的に言えたか',
      '一般論でなく自分の経験として話せたか',
      '即興でも筋道立てて説明できたか',
    ],
    safetyNote:
      '学びを言葉にする習慣は、次のフライトの安全と英語力の両方を支えます。',
  },
];